import { DeleteResult, FilterQuery, Model, QueryOptions, UpdateQuery, UpdateResult } from 'mongoose';

export interface BaseServiceInterface<T> {

  getOne( query: FilterQuery<T>, options?: QueryOptions ): Promise<T | null>

  getMany( query: FilterQuery<T>, options?: QueryOptions ): Promise<T[]>

  create( data: Partial<T> ): Promise<T>

  delete( query: FilterQuery<T> ): Promise<DeleteResult>

  update( query: FilterQuery<T>, data: UpdateQuery<T> ): Promise<UpdateResult>

}

export class BaseService<T> implements BaseServiceInterface<T> {

  private model: Model<T>;

  constructor( model: Model<T> ) { this.model = model; };

  getOne = async ( query: FilterQuery<T>, options?: QueryOptions ) => await this.model.findOne( query ).setOptions( options || {} );

  getMany = async ( query: FilterQuery<T>, options: QueryOptions ) => await this.model.find( query ).setOptions( options || {} );

  create = async ( data: Partial<T> ) => await this.model.create( data );

  delete = async ( query: FilterQuery<T> ) => await this.model.deleteMany( query );

  update = async ( query: FilterQuery<T>, data: UpdateQuery<T> ) => await this.model.updateOne( query, data );

};