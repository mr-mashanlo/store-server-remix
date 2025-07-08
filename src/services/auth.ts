import { FilterQuery, Model } from 'mongoose';

export interface AuthServiceInterface<T> {

  signIn( query: FilterQuery<T> ): Promise<T | null>

  signUp( data: Partial<T> ): Promise<T>

}

export class AuthService<T> implements AuthServiceInterface<T> {

  private model;

  constructor( model: Model<T> ) { this.model = model; };

  signIn = async ( query: FilterQuery<T> ) => await this.model.findOne( query );

  signUp = async ( data: Partial<T> ) => await this.model.create( data );

};