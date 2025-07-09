import { DeleteResult, FilterQuery, Model } from 'mongoose';

export interface MediaServiceInterface<T> {

  getOne( query: FilterQuery<T> ): Promise<T | null>

  getMany( query: FilterQuery<T> ): Promise<T[]>

  create( file: Express.Multer.File, alt: string ): Promise<T>

  delete( query: FilterQuery<T> ): Promise<DeleteResult>

}

export class MediaService<T> implements MediaServiceInterface<T> {

  private model: Model<T>;

  constructor( model: Model<T> ) { this.model = model; };

  getOne = async ( query: FilterQuery<T> ) => await this.model.findOne( query );

  getMany = async ( query: FilterQuery<T> ) => await this.model.find( query );

  create = async ( file: Express.Multer.File, alt: string ) => await this.model.create( { name: file.filename, path: file.path, alt } );

  delete = async ( query: FilterQuery<T> ) => await this.model.deleteMany( query );

}