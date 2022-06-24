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
          item.classList.add('colour-picker-field--active');
          picker.style.height = `60px`;
          if (text.value) {
            item.classList.add('colour-picker-field--active');
          } else {
            item.classList.remove('colour-picker-field--active');
          }
        }

        if (text.value) {
          handleSetColours();
        }
        picker.addEventListener('input', () => {
          handleSetColours(picker, text);
        });
        picker.addEventListener('click', () => {
          handleSetColours(picker, text);
        });
        text.addEventListener('change', () => {
          handleSetColours();
        });
        
      })
    },
  };
})(Drupal);
