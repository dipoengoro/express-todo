class Default {
  static readonly RESPONSE_SUCCESS: string = 'Success';
  static readonly MESSAGE_TODOS_EMPTY: string = 'Nothing in todos';
  static readonly MESSAGE_TODO_NOT_FOUND: string = 'Unable to retrieve the todo with the given ID.';
  static readonly MESSAGE_TEXT_EMPTY: string = 'newText cannot be empty';
  static readonly MESSAGE_ID_EMPTY: string = 'Id cannot be empty';
  static readonly MESSAGE_ID_TEXT_EMPTY: string = 'Both Id and Text cannot be empty';
  static readonly ERROR_400: string = '400';

  static LISTENING = (port: string | number): string => {
    return `Server listening on http://localhost:${port}/`;
  };
}

export default Default;