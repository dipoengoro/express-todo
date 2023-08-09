class Todo {
  private readonly __id: string = '';

  constructor(id: string, text: string) {
    if (id !== '' && text !== '') {
      this.__id = id.trim();
      this._text = text.trim();
    } else {
      throw new Error('Both id and text cannot be empty');
    }
  }

  private _text: string = '';

  get text(): string {
    return this._text;
  }

  get id(): string {
    return this.__id;
  }

  public setText(newText: string): void {
    if (newText === '') {
      throw new Error('newText cannot be empty');
    }
    this._text = newText.trim();
  }

  toJSON() {
    return {
      _id: this.__id,
      text: this._text,
    };
  }
}

export default Todo;