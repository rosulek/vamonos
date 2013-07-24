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
            [@visualizer] = options
            $("body").append(@$dialog)  
    
        when "displayStart"
            @currentAnswer = null
            @currentFrame  = null
            @framesPassed  = []
            @wrongTimeout  = null
            @log           = []

        when "render"
            [@currentFrame, type] = options
            return unless type is "next" \
                      and @condition(@currentFrame) \
                      and @currentFrame._frameNumber not in @framesPassed

            @$dialog.attr("title", @title(@currentFrame))
            @$question.html(@question(@currentFrame))
            @$answer.val("")
            @$feedback.html("")
            @$feedback.removeClass("correct-answer", "wrong-answer")

            @currentAnswer = @answer(@currentFrame)
            @wrongTimeout  = null

            @visualizer.frozen = true

            @$dialog.dialog({
                modal: true,
                closeOnEscape: false,
                position: { my: "center", at: "center", of: window }
            })

        when "displayStop"
            console.log @log

    submitHandler: ->
        if @$answer.val() is @currentAnswer + ""
            @$feedback.html("&#x2713; Correct!")
            @$feedback.addClass("correct-answer")
            @framesPassed.push(@currentFrame._frameNumber)
            clearTimeout(@wrongTimeout) if @wrongTimeout
            @log.push("correct answer `#{@currentAnswer}` at frame #{@currentFrame._frameNumber}")

            setTimeout(
                ( => @$dialog.dialog("close"); @visualizer.frozen = false),
                1000)
            
        else
            @$feedback.addClass("wrong-answer")
            @$feedback.html("&#x2717; Sorry, that's not right!")
            @wrongTimeout = setTimeout( (=> @$feedback.html("")), 2000)

            @log.push("wrong answer `#{@$answer.val()}` at frame #{@currentFrame._frameNumber}")

Vamonos.export { Widget: { UserQuiz } }
