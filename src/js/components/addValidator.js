function createValidator(formSelector, inputNames) {
  const validator = new JustValidate(formSelector, {
    validateBeforeSubmitting: true,
    errorFieldCssClass: 'invalid',
    errorLabelCssClass: 'input-wrapper__error-label',
    errorLabelStyle: {},
    successFieldCssClass: 'valid',
  });

  for (const inputName of inputNames) {
    const rules = [{ rule: 'required', errorMessage: 'Обязательное поле' }];
    if (inputName === 'tel') {
      rules.push({
        rule: 'number', errorMessage: 'Недопустимый формат',
        rule: 'minLength', value: 11, errorMessage: 'Номер должен быть не короче 11 цифр',
       });
    } else if (inputName === 'email') {
      rules.push({ rule: 'email', errorMessage: 'Недопустимый формат' });
    }

    validator.addField(`${formSelector} [name = ${inputName}]`, rules)
  }

  return validator;
}
