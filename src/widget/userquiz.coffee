class UserQuiz

    @spec =
        question:
            type: ["String", "Function"]
            description:
                "either a string or a function that takes a frame and returns a " +
                "string"
        answer:
            type: ["String", "Function"]
            description:
                "either a string or a function that takes a frame and returns a " +
                "string"
        condition:
            type: "Function"
            description:
                "a function taking the current frame, returning a boolean, " +
                "used to determine when to ask a question"
        title:
            type: ["String", "Function"]
            defaultValue: undefined
            description:
                "the title of the quiz. either as a plain string or as a function " +
                "that takes the current frame as an argument and returns a string."

    constructor: (args) ->

        Vamonos.handleArguments
            widgetObject : this
            givenArgs    : args

        @title   ?= Vamonos.funcify("Self-test question")
        @question = Vamonos.funcify(@question)
        @answer   = Vamonos.funcify(@answer)

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
                      and @condition(@currentFrame, @visualizer.frames) \
                      and @currentFrame._frameNumber not in @framesPassed

            @$dialog.attr("title", @title(@currentFrame))
            @$question.html(@question(@currentFrame, @visualizer.frames))
            @$answer.val("")
            @$feedback.html("")
            @$feedback.removeClass("correct-answer", "wrong-answer")

            @currentAnswer = @answer(@currentFrame, @visualizer.frames)
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

@Vamonos.export { Widget: { UserQuiz } }
