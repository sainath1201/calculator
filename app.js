document.onreadystatechange = () => {
  if (document.readyState == 'complete')
  {
    const model = {
      key_boardinputs : '',
      answer : 0.
    };

    const view = {
      output : document.getElementById('result'),
      inputs  : document.getElementsByClassName('calculator_inputs'),
      clear : document.getElementById('clear'),
      init(){
        for (let index = 0; index < this.inputs.length; index++) {
          const element = this.inputs[index];
          element.onclick = () =>
          {
            if (element.innerText === '=')
            {
              controller.handleoutput();
            }
            else{
              controller.handleinput(element.innerText);
            }
          }; 
          this.clear.onclick = () => {
            controller.handleclear();
          };
        }
      },
      render:{
        display_values(key_boardinputs){
          console.info(model.key_boardinputs);
          view.output.innerText = model.key_boardinputs;
        },
        display_output_values(){
          view.output.innerText = model.answer;
        },
        display_clear(){
          view.output.innerText = model.key_boardinputs;
        },

      },

    };

    const controller = {
      handleinput(texts){
        model.key_boardinputs += texts;
        view.render.display_values(model.key_boardinputs);
      },
      handleoutput(){
        model.answer = eval(model.key_boardinputs);
        view.render.display_output_values(model.answer);
        model.key_boardinputs = '';
      },
      handleclear(){
        model.key_boardinputs='';
        view.render.display_clear();
      },
      init() { 
        view.init();
      },
    };
    controller.init();
  }
};