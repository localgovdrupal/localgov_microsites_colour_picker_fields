(function colourPickerFieldsScript(Drupal) {
  Drupal.behaviors.micrositeColourPickerFields = {
    attach: function (context, settings) {
      context = context || document;

      const colourPickerFields = context.querySelectorAll('.colour-picker-field');

      colourPickerFields.forEach(item => {
        const text = item.querySelector('.colour-picker-field__text');
        const picker = item.querySelector('.colour-picker-field__picker');

        function handleSetColours(item1 = text, item2 = picker) {
          let colour = item1.value;
          item2.value = colour;
          text.style.border = `5px solid ${colour}`;
        }

        if (text.value) {
          handleSetColours();
        }
        picker.addEventListener('input', (e) => {
          handleSetColours(picker, text);
        });
        text.addEventListener('change', (e) => {
          handleSetColours();
        });
        
      })
    },
  };
})(Drupal);
