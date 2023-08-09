class Todo {
  private readonly __id: string = '';

  constructor(id: string, text: string) {
    if (id !== '' && text !== '') {
      this.__id = id;
      this._text = text;
    }
  }

  private _text: string = '';

  get text(): string {
    return this._text;
  }

  get id(): string {
    return this.__id;
  }

  setText(newText: string): number {
    if (newText === '') {
      return -1;
    }
    this._text = newText.trim();
    return 0;
  }

  toJSON() {
    return {
      _id: this.__id,
      text: this._text,
    };
  }
}

export default Todo;