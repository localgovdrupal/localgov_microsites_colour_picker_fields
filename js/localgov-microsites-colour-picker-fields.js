(function colourPickerFieldsScript(Drupal) {
  Drupal.behaviors.micrositeColourPickerFields = {
    attach: function (context, settings) {
      context = context || document;

      const colourPickerFields = context.querySelectorAll('.colour-picker-field');
      colourPickerFields.forEach(item => {
        const text = item.querySelector('.colour-picker-field__text');
        const picker = item.querySelector('.colour-picker-field__picker');
        picker.addEventListener('change', (e) => {
          let colour = e.target.value
          text.value = colour;
        })
        if (text.value) {
          picker.value = text.value;
        }
        text.addEventListener('change', (e) => {
          let colour = text.value
          picker.value = colour;
        })
      })

    },
  };
})(Drupal);
