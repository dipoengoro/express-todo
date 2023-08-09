class Todo {
  private readonly __id: string;

  constructor(id: string, text: string) {
    this.__id = id;
    this._text = text;
  }

  private _text: string;

  get text(): string {
    return this._text;
  }

  get id(): string {
    return this.__id;
  }

  setText(newText: string) {
    if (newText != '') {
      this._text = newText.trim();
    }
  }
}

export default Todo;