// Section class
export default class Section {
  constructor({renderItems}, containerSelector) {
    this._renderItems = renderItems;
    this._container = containerSelector;
  }

  // Render card
  renderItems(items) {
    items.forEach((item) => {
      this._renderItems(item);
    });
  }

  // Add card
  addItem(element) {
    this._container.prepend(element);

  }
}
