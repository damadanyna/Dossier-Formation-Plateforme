import {
  doc,
  getDoc,
  setDoc,
  deleteDoc,
  SetOptions,
  DocumentSnapshot,
} from 'firebase/firestore';
import db from '../config/db';
import { pluralize } from '../utils/string';

export default class BaseModel<T extends object> {
  private _id: string;
  private _exists = false;
  private _data: T;

  constructor(id: string, document?: DocumentSnapshot<T>) {
    this._id = id;
    this._data = document ? (document.data() as T) : ({} as T);
    this._exists = document?.exists() ?? false;
  }

  protected static get _collectionName(): string {
    return '';
  }

  get id() {
    return this._id;
  }

  get data() {
    return this._data;
  }

  get exists() {
    return this._exists;
  }

  set<K extends keyof T>(key: K, value: T[K]): BaseModel<T> {
    this._data[key] = value;
    return this;
  }

  async save(): Promise<void> {
    const id = this.id;
    const data = this.data;
    const self = <typeof BaseModel>this.constructor;
    await self.setById<BaseModel<T>, T>(id, data);
    this._exists = true;
  }

  async delete(): Promise<void> {
    const id = this.id;
    const self = <typeof BaseModel>this.constructor;
    await self.deleteById(id);
    this._exists = false;
  }

  // --- STATIC METHODS ---

  static async getById<T>(id: string): Promise<T | null> {
    const docRef = doc(db, pluralize(this._collectionName), id);
    const document = await getDoc(docRef);
    if (document.exists()) {
      return new this(document.id, document) as T;
    } else {
      return null;
    }
  }

  static async setById<T, D extends object>(
    id: string,
    data: Omit<D, '_id'>,
    options?: SetOptions
  ): Promise<T> {
    const docRef = doc(db, pluralize(this._collectionName), id);
    if (options) {
      await setDoc(docRef, data, options);
    } else {
      await setDoc(docRef, data);
    }
    const document = await getDoc(docRef);

    return new this(document.id, document) as T;
  }

  static async deleteById(id: string): Promise<void> {
    const docRef = doc(db, pluralize(this._collectionName), id);
    await deleteDoc(docRef);
  }
}
