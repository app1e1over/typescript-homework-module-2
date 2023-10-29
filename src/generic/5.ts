/*
  Вам потрібно реалізувати інтерфейс KeyValuePair, який описує пару ключ-значення. 
  Використовуйте generics, щоб цей інтерфейс міг працювати з будь-якими типами ключів та значень.
*/

interface KeyValuePair<K, V>{
  key:K;
  value:V;
  getValue():V;
  setValue(val:V):void;

  getKey():K;
  setKey(val:K):void;
}

export {};