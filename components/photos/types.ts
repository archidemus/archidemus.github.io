export interface Size {
  height: number
  width: number,
}
export interface PhotoParams extends Size{
  path: string,
}
export interface Photo extends PhotoParams {
  small: PhotoParams,
}

export interface Photos {
  photos: Array<Photo>,
}
