import MyError from './my-error';
import Default from '../util/default';

class Todo {
  private readonly __id: string = '';

  constructor(id: string, text: string) {
    if (id !== '' && text !== '') {
      this.__id = id.trim();
      this._text = text.trim();
    } else {
      throw new MyError(Default.MESSAGE_ID_TEXT_EMPTY, Default.ERROR_400);
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
      throw new MyError(Default.MESSAGE_TEXT_EMPTY, Default.ERROR_400);
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