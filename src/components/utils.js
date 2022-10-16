export function showSaveStatus(isLoading, button, initialText = 'Сохранить') {
  if (isLoading) {
    button.textContent = "Сохранение...";
  } else {
    button.textContent = initialText;
  }
}
