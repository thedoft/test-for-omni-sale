export const maskPhone = () => {
  window.addEventListener("DOMContentLoaded", () => {
    document.querySelector('.form__input_type_phone').setAttribute('pattern', '[0-9][ -].[ -][0-9]{3}[ -].[ -][0-9]{3}[ -][0-9]{2}[ -][0-9]{2}');
    document.querySelector('.form__input_type_phone').setAttribute('maxlength', 19);

    [].forEach.call(document.querySelectorAll('.form__input_type_phone'), input => { // this - массив инпутов, input - параметр функции call
      function mask(evt) {
        let keyCode = evt.code;

        let pos = this.selectionStart;
        if (pos < 5) evt.preventDefault();

        const matrix = "8 ( ___ ) ___-__-__";

        let i = 0,
          def = matrix.replace(/\D/g, ""),
          val = this.value.replace(/\D/g, ""),
          new_value = matrix.replace(/[_\d]/g, function(a) {
            return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
          });

        i = new_value.indexOf("_");
        if (i != -1) {
          i < 8 && (i = 4);
          new_value = new_value.slice(0, i);
          this.selectionStart = new_value.length + i;
        }

        let reg = matrix.substr(0, this.value.length)
        .replace(/_/g, function(a) {
            return "\\d{1," + a.length + "}";
          })
        .replace(/[()]/g, "\\$&");

        reg = new RegExp("^" + reg + "$");

        if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
      }

      input.addEventListener("input", mask);
      input.addEventListener("focus", mask);
    });
  });
}
