interface parcelItem {
  id: number;
  name: string;
  age: number;
  address: string;
  tags: Array<string>;
}

export interface initialParcelState {
  parcelList: Array<parcelItem>;
}
