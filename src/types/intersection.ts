import {SchemaType, withTypeSymbol, TypeOf} from './base'

export interface IntersectionType<Left extends SchemaType, Right extends SchemaType>
  extends SchemaType<TypeOf<Left> & TypeOf<Right>> {
  type: 'intersection'
  left: Left
  right: Right
}

export const intersection = <Left extends SchemaType, Right extends SchemaType>(
  left: Left,
  right: Right,
): IntersectionType<Left, Right> => withTypeSymbol({type: 'intersection', left, right})

export const isIntersectionType = <Left extends SchemaType, Right extends SchemaType>(
  value: SchemaType<unknown>,
): value is IntersectionType<Left, Right> => value.type === 'intersection'
