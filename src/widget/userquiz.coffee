class UserQuiz

    constructor: ({@condition, @question, @answer, @title}) ->
        @title   ?= @funcify("Self-test question:")
        @question = @funcify(@question)
        @answer   = @funcify(@answer)

        @$dialog = $("<div>", {class: "userquiz"})
        @$dialog.hide()

        @$question = $("<div>", {class: "userquiz-question"}).appendTo(@$dialog)

        response   = $("<div>", {class: "userquiz-response"}).appendTo(@$dialog)

        @$answer   = $("<input>", {class: "userquiz-answer"}).appendTo(response)
        @$submit   = $("<button>", {text: "answer"}).appendTo(response)
        @$feedback = $("<div>", {class: "userquiz-feedback"}).appendTo(@$dialog)

        @$submit.on("click", => @submitHandler())
        @$answer.on("keypress", (e) =>
            if e.keyCode is 13 # enter
                @$submit.trigger("click")
                return false
        )

    funcify: (arg) ->
        return arg if typeof(arg) is "function"
        return -> arg

    event: (event, options...) -> switch event
        when "setup"
            $("body").append(@$dialog)  
    
        when "displayStart"
            @currentAnswer = null
            @currentFrame  = null
            @framesPassed  = []

        when "render"
            [@currentFrame, type] = options
            return unless type is "next" \
                      and @condition(@currentFrame) \
                      and @currentFrame._frameNumber not in @framesPassed

            @$dialog.attr("title", @title(@currentFrame))
            @$question.html(@question(@currentFrame))
            @$answer.val("")
            @$feedback.html("")

            @currentAnswer = @answer(@currentFrame)

            $("body").addClass("vamonos-modal")
            @$dialog.dialog({
                modal: true,
                closeOnEscape: false,
                position: { my: "center", at: "center", of: window }
            })

    submitHandler: ->
        if @$answer.val() is @currentAnswer + ""
            @$feedback.html("Correct!")
            @framesPassed.push(@currentFrame._frameNumber)
            setTimeout( (=> @$dialog.dialog("close"); $("body").removeClass("vamonos-modal")), 1000)
            
        else
            @$feedback.html("Sorry, that's not right!")

Vamonos.export { Widget: { UserQuiz } }
