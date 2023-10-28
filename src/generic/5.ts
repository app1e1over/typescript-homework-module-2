/*
  Вам потрібно реалізувати інтерфейс KeyValuePair, який описує пару ключ-значення. 
  Використовуйте generics, щоб цей інтерфейс міг працювати з будь-якими типами ключів та значень.
*/

interface KeyValuePair<k, v>{
  key:k;
  value:v;
  getValue():v;
  setValue(val:v):void;

  getKey():k;
  setKey(val:k):void;
}

export {};