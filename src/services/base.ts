import { DeleteResult, FilterQuery, Model, PipelineStage, QueryOptions, UpdateQuery } from 'mongoose';

export interface BaseServiceInterface<T> {

  aggregate( pipline: PipelineStage[] ): Promise<T[]>

  create( data: Partial<T> ): Promise<T>

  delete( query: FilterQuery<T> ): Promise<DeleteResult>

  getMany( query: FilterQuery<T>, options?: QueryOptions ): Promise<T[]>

  getOne( query: FilterQuery<T>, options?: QueryOptions ): Promise<T | null>

  update( query: FilterQuery<T>, data: UpdateQuery<T> ): Promise<T | null>

}

export class BaseService<T> implements BaseServiceInterface<T> {

  private model: Model<T>;

  constructor( model: Model<T> ) { this.model = model; };

  aggregate = async ( pipline: PipelineStage[] ) => await this.model.aggregate( pipline );

  create = async ( data: Partial<T> ) => await this.model.create( data );

  delete = async ( query: FilterQuery<T> ) => await this.model.deleteMany( query );

  getMany = async ( query: FilterQuery<T>, options: QueryOptions ) => await this.model.find( query ).setOptions( options || {} );

  getOne = async ( query: FilterQuery<T>, options?: QueryOptions ) => await this.model.findOne( query ).setOptions( options || {} );

  update = async ( query: FilterQuery<T>, data: UpdateQuery<T> ) => await this.model.findOneAndUpdate( query, data, { new: true } );

};