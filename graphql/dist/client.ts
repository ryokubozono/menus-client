import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type CreateImageInput = {
  image_path: Scalars['String'];
  item_uid: Scalars['String'];
};

export type CreateItemInput = {
  image_path: Scalars['String'];
  is_sold: Scalars['Boolean'];
  is_visible: Scalars['Boolean'];
  name: Scalars['String'];
  price: Scalars['Float'];
  shop_uid: Scalars['String'];
  sort: Scalars['Int'];
  tag_uid: Scalars['String'];
};

export type CreateShopInput = {
  address: Scalars['String'];
  name: Scalars['String'];
  note: Scalars['String'];
  tel: Scalars['String'];
  zip: Scalars['String'];
};

export type CreateTagInput = {
  name: Scalars['String'];
  note: Scalars['String'];
  shop_uid: Scalars['String'];
  sort: Scalars['Int'];
};

export type CreateTestInput = {
  text: Scalars['String'];
};

export type Image = {
  __typename?: 'Image';
  image_path: Scalars['String'];
  item_uid: Scalars['String'];
};

export type Item = {
  __typename?: 'Item';
  image_path: Scalars['String'];
  is_sold: Scalars['Boolean'];
  is_visible: Scalars['Boolean'];
  name: Scalars['String'];
  price: Scalars['Float'];
  shop_uid: Scalars['String'];
  sort: Scalars['Int'];
  tag_uid: Scalars['String'];
  uid: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createImage: Image;
  createItem: Item;
  createShop: Shop;
  createTag: Tag;
  createTest: Test;
  deleteImage: Scalars['String'];
  deleteItem: Scalars['String'];
  deleteShop: Scalars['String'];
  deleteTag: Scalars['String'];
  deleteTest: Scalars['String'];
  updateItem: Item;
  updateShop: Shop;
  updateTag: Tag;
  updateTest: Test;
};


export type MutationCreateImageArgs = {
  input: CreateImageInput;
};


export type MutationCreateItemArgs = {
  input: CreateItemInput;
};


export type MutationCreateShopArgs = {
  input: CreateShopInput;
};


export type MutationCreateTagArgs = {
  input: CreateTagInput;
};


export type MutationCreateTestArgs = {
  input: CreateTestInput;
};


export type MutationDeleteImageArgs = {
  uid: Scalars['String'];
};


export type MutationDeleteItemArgs = {
  uid: Scalars['String'];
};


export type MutationDeleteShopArgs = {
  uid: Scalars['String'];
};


export type MutationDeleteTagArgs = {
  uid: Scalars['String'];
};


export type MutationDeleteTestArgs = {
  uid: Scalars['String'];
};


export type MutationUpdateItemArgs = {
  input: UpdateItemInput;
};


export type MutationUpdateShopArgs = {
  input: UpdateShopInput;
};


export type MutationUpdateTagArgs = {
  input: UpdateTagInput;
};


export type MutationUpdateTestArgs = {
  input: UpdateTestInput;
};

export type Query = {
  __typename?: 'Query';
  image: Image;
  item: Item;
  itemsByShopId: Array<Item>;
  itemsByTagId: Array<Item>;
  shop: Shop;
  shops: Array<Shop>;
  tag: Tag;
  tagsByShopId: Array<Tag>;
  test: Test;
  tests: Array<Test>;
};


export type QueryImageArgs = {
  uid: Scalars['String'];
};


export type QueryItemArgs = {
  uid: Scalars['String'];
};


export type QueryItemsByShopIdArgs = {
  shopUid: Scalars['String'];
};


export type QueryItemsByTagIdArgs = {
  tagUid: Scalars['String'];
};


export type QueryShopArgs = {
  uid: Scalars['String'];
};


export type QueryTagArgs = {
  uid: Scalars['String'];
};


export type QueryTagsByShopIdArgs = {
  shopUid: Scalars['String'];
};


export type QueryTestArgs = {
  uid: Scalars['String'];
};

export type Shop = {
  __typename?: 'Shop';
  address: Scalars['String'];
  name: Scalars['String'];
  note: Scalars['String'];
  tel: Scalars['String'];
  uid: Scalars['String'];
  zip: Scalars['String'];
};

export type Tag = {
  __typename?: 'Tag';
  name: Scalars['String'];
  note: Scalars['String'];
  shop_uid: Scalars['String'];
  sort: Scalars['Int'];
  uid: Scalars['String'];
};

export type Test = {
  __typename?: 'Test';
  text: Scalars['String'];
  uid: Scalars['String'];
};

export type UpdateItemInput = {
  image_path: Scalars['String'];
  is_sold: Scalars['Boolean'];
  is_visible: Scalars['Boolean'];
  name: Scalars['String'];
  price: Scalars['Float'];
  sort: Scalars['Int'];
  tag_uid: Scalars['String'];
  uid: Scalars['String'];
};

export type UpdateShopInput = {
  address: Scalars['String'];
  name: Scalars['String'];
  note: Scalars['String'];
  tel: Scalars['String'];
  uid: Scalars['String'];
  zip: Scalars['String'];
};

export type UpdateTagInput = {
  name: Scalars['String'];
  note: Scalars['String'];
  sort: Scalars['Int'];
  uid: Scalars['String'];
};

export type UpdateTestInput = {
  text: Scalars['String'];
  uid: Scalars['String'];
};

export type CreateImageMutationVariables = Exact<{
  item_uid: Scalars['String'];
  image_path: Scalars['String'];
}>;


export type CreateImageMutation = { __typename?: 'Mutation', createImage: { __typename?: 'Image', item_uid: string, image_path: string } };

export type CreateItemMutationVariables = Exact<{
  shop_uid: Scalars['String'];
  tag_uid: Scalars['String'];
  sort: Scalars['Int'];
  name: Scalars['String'];
  price: Scalars['Float'];
  is_sold: Scalars['Boolean'];
  is_visible: Scalars['Boolean'];
  image_path: Scalars['String'];
}>;


export type CreateItemMutation = { __typename?: 'Mutation', createItem: { __typename?: 'Item', uid: string, shop_uid: string, tag_uid: string, sort: number, name: string, price: number, is_sold: boolean, is_visible: boolean, image_path: string } };

export type CreateShopMutationVariables = Exact<{
  name: Scalars['String'];
  zip: Scalars['String'];
  address: Scalars['String'];
  tel: Scalars['String'];
  note: Scalars['String'];
}>;


export type CreateShopMutation = { __typename?: 'Mutation', createShop: { __typename?: 'Shop', name: string, zip: string, address: string, tel: string, note: string } };

export type CreateTagMutationVariables = Exact<{
  shop_uid: Scalars['String'];
  name: Scalars['String'];
  note: Scalars['String'];
  sort: Scalars['Int'];
}>;


export type CreateTagMutation = { __typename?: 'Mutation', createTag: { __typename?: 'Tag', uid: string, shop_uid: string, name: string, note: string, sort: number } };

export type CreateTestMutationVariables = Exact<{
  text: Scalars['String'];
}>;


export type CreateTestMutation = { __typename?: 'Mutation', createTest: { __typename?: 'Test', uid: string, text: string } };

export type DeleteImageMutationVariables = Exact<{
  uid: Scalars['String'];
}>;


export type DeleteImageMutation = { __typename?: 'Mutation', deleteImage: string };

export type DeleteItemMutationVariables = Exact<{
  uid: Scalars['String'];
}>;


export type DeleteItemMutation = { __typename?: 'Mutation', deleteItem: string };

export type DeleteShopMutationVariables = Exact<{
  uid: Scalars['String'];
}>;


export type DeleteShopMutation = { __typename?: 'Mutation', deleteShop: string };

export type DeleteTagMutationVariables = Exact<{
  uid: Scalars['String'];
}>;


export type DeleteTagMutation = { __typename?: 'Mutation', deleteTag: string };

export type DeleteTestMutationVariables = Exact<{
  uid: Scalars['String'];
}>;


export type DeleteTestMutation = { __typename?: 'Mutation', deleteTest: string };

export type UpdateItemMutationVariables = Exact<{
  uid: Scalars['String'];
  tag_uid: Scalars['String'];
  sort: Scalars['Int'];
  name: Scalars['String'];
  price: Scalars['Float'];
  is_sold: Scalars['Boolean'];
  is_visible: Scalars['Boolean'];
  image_path: Scalars['String'];
}>;


export type UpdateItemMutation = { __typename?: 'Mutation', updateItem: { __typename?: 'Item', uid: string, shop_uid: string, tag_uid: string, sort: number, name: string, price: number, is_sold: boolean, is_visible: boolean, image_path: string } };

export type UpdateShopMutationVariables = Exact<{
  uid: Scalars['String'];
  name: Scalars['String'];
  zip: Scalars['String'];
  address: Scalars['String'];
  tel: Scalars['String'];
  note: Scalars['String'];
}>;


export type UpdateShopMutation = { __typename?: 'Mutation', updateShop: { __typename?: 'Shop', uid: string, name: string, zip: string, address: string, tel: string, note: string } };

export type UpdateTagMutationVariables = Exact<{
  uid: Scalars['String'];
  name: Scalars['String'];
  note: Scalars['String'];
  sort: Scalars['Int'];
}>;


export type UpdateTagMutation = { __typename?: 'Mutation', updateTag: { __typename?: 'Tag', uid: string, shop_uid: string, name: string, note: string, sort: number } };

export type UpdateTestMutationVariables = Exact<{
  uid: Scalars['String'];
  text: Scalars['String'];
}>;


export type UpdateTestMutation = { __typename?: 'Mutation', updateTest: { __typename?: 'Test', uid: string, text: string } };

export type FindImageQueryVariables = Exact<{
  uid: Scalars['String'];
}>;


export type FindImageQuery = { __typename?: 'Query', image: { __typename?: 'Image', item_uid: string, image_path: string } };

export type FindItemQueryVariables = Exact<{
  uid: Scalars['String'];
}>;


export type FindItemQuery = { __typename?: 'Query', item: { __typename?: 'Item', uid: string, shop_uid: string, tag_uid: string, name: string, sort: number, price: number, is_sold: boolean, is_visible: boolean, image_path: string } };

export type ListItemsByShopIdQueryVariables = Exact<{
  shopUid: Scalars['String'];
}>;


export type ListItemsByShopIdQuery = { __typename?: 'Query', itemsByShopId: Array<{ __typename?: 'Item', uid: string, shop_uid: string, tag_uid: string, name: string, sort: number, price: number, is_sold: boolean, is_visible: boolean, image_path: string }> };

export type ListItemsByTagIdQueryVariables = Exact<{
  tagUid: Scalars['String'];
}>;


export type ListItemsByTagIdQuery = { __typename?: 'Query', itemsByTagId: Array<{ __typename?: 'Item', uid: string, shop_uid: string, tag_uid: string, name: string, sort: number, price: number, is_sold: boolean, is_visible: boolean, image_path: string }> };

export type ListTagsByShopIdQueryVariables = Exact<{
  shopUid: Scalars['String'];
}>;


export type ListTagsByShopIdQuery = { __typename?: 'Query', tagsByShopId: Array<{ __typename?: 'Tag', uid: string, shop_uid: string, name: string, note: string, sort: number }> };

export type FindShopQueryVariables = Exact<{
  uid: Scalars['String'];
}>;


export type FindShopQuery = { __typename?: 'Query', shop: { __typename?: 'Shop', uid: string, name: string, zip: string, address: string, tel: string, note: string } };

export type ListShopsQueryVariables = Exact<{ [key: string]: never; }>;


export type ListShopsQuery = { __typename?: 'Query', shops: Array<{ __typename?: 'Shop', uid: string, name: string, zip: string, address: string, tel: string, note: string }> };

export type FindTagQueryVariables = Exact<{
  uid: Scalars['String'];
}>;


export type FindTagQuery = { __typename?: 'Query', tag: { __typename?: 'Tag', uid: string, shop_uid: string, name: string, note: string, sort: number } };

export type FindTestQueryVariables = Exact<{
  uid: Scalars['String'];
}>;


export type FindTestQuery = { __typename?: 'Query', test: { __typename?: 'Test', uid: string, text: string } };

export type ListTestsQueryVariables = Exact<{ [key: string]: never; }>;


export type ListTestsQuery = { __typename?: 'Query', tests: Array<{ __typename?: 'Test', uid: string, text: string }> };


export const CreateImageDocument = gql`
    mutation createImage($item_uid: String!, $image_path: String!) {
  createImage(input: {item_uid: $item_uid, image_path: $image_path}) {
    item_uid
    image_path
  }
}
    `;
export type CreateImageMutationFn = Apollo.MutationFunction<CreateImageMutation, CreateImageMutationVariables>;

/**
 * __useCreateImageMutation__
 *
 * To run a mutation, you first call `useCreateImageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateImageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createImageMutation, { data, loading, error }] = useCreateImageMutation({
 *   variables: {
 *      item_uid: // value for 'item_uid'
 *      image_path: // value for 'image_path'
 *   },
 * });
 */
export function useCreateImageMutation(baseOptions?: Apollo.MutationHookOptions<CreateImageMutation, CreateImageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateImageMutation, CreateImageMutationVariables>(CreateImageDocument, options);
      }
export type CreateImageMutationHookResult = ReturnType<typeof useCreateImageMutation>;
export type CreateImageMutationResult = Apollo.MutationResult<CreateImageMutation>;
export type CreateImageMutationOptions = Apollo.BaseMutationOptions<CreateImageMutation, CreateImageMutationVariables>;
export const CreateItemDocument = gql`
    mutation createItem($shop_uid: String!, $tag_uid: String!, $sort: Int!, $name: String!, $price: Float!, $is_sold: Boolean!, $is_visible: Boolean!, $image_path: String!) {
  createItem(
    input: {shop_uid: $shop_uid, tag_uid: $tag_uid, name: $name, sort: $sort, price: $price, is_sold: $is_sold, is_visible: $is_visible, image_path: $image_path}
  ) {
    uid
    shop_uid
    tag_uid
    sort
    name
    price
    is_sold
    is_visible
    image_path
  }
}
    `;
export type CreateItemMutationFn = Apollo.MutationFunction<CreateItemMutation, CreateItemMutationVariables>;

/**
 * __useCreateItemMutation__
 *
 * To run a mutation, you first call `useCreateItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createItemMutation, { data, loading, error }] = useCreateItemMutation({
 *   variables: {
 *      shop_uid: // value for 'shop_uid'
 *      tag_uid: // value for 'tag_uid'
 *      sort: // value for 'sort'
 *      name: // value for 'name'
 *      price: // value for 'price'
 *      is_sold: // value for 'is_sold'
 *      is_visible: // value for 'is_visible'
 *      image_path: // value for 'image_path'
 *   },
 * });
 */
export function useCreateItemMutation(baseOptions?: Apollo.MutationHookOptions<CreateItemMutation, CreateItemMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateItemMutation, CreateItemMutationVariables>(CreateItemDocument, options);
      }
export type CreateItemMutationHookResult = ReturnType<typeof useCreateItemMutation>;
export type CreateItemMutationResult = Apollo.MutationResult<CreateItemMutation>;
export type CreateItemMutationOptions = Apollo.BaseMutationOptions<CreateItemMutation, CreateItemMutationVariables>;
export const CreateShopDocument = gql`
    mutation createShop($name: String!, $zip: String!, $address: String!, $tel: String!, $note: String!) {
  createShop(
    input: {name: $name, zip: $zip, address: $address, tel: $tel, note: $note}
  ) {
    name
    zip
    address
    tel
    note
  }
}
    `;
export type CreateShopMutationFn = Apollo.MutationFunction<CreateShopMutation, CreateShopMutationVariables>;

/**
 * __useCreateShopMutation__
 *
 * To run a mutation, you first call `useCreateShopMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateShopMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createShopMutation, { data, loading, error }] = useCreateShopMutation({
 *   variables: {
 *      name: // value for 'name'
 *      zip: // value for 'zip'
 *      address: // value for 'address'
 *      tel: // value for 'tel'
 *      note: // value for 'note'
 *   },
 * });
 */
export function useCreateShopMutation(baseOptions?: Apollo.MutationHookOptions<CreateShopMutation, CreateShopMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateShopMutation, CreateShopMutationVariables>(CreateShopDocument, options);
      }
export type CreateShopMutationHookResult = ReturnType<typeof useCreateShopMutation>;
export type CreateShopMutationResult = Apollo.MutationResult<CreateShopMutation>;
export type CreateShopMutationOptions = Apollo.BaseMutationOptions<CreateShopMutation, CreateShopMutationVariables>;
export const CreateTagDocument = gql`
    mutation createTag($shop_uid: String!, $name: String!, $note: String!, $sort: Int!) {
  createTag(input: {shop_uid: $shop_uid, name: $name, note: $note, sort: $sort}) {
    uid
    shop_uid
    name
    note
    sort
  }
}
    `;
export type CreateTagMutationFn = Apollo.MutationFunction<CreateTagMutation, CreateTagMutationVariables>;

/**
 * __useCreateTagMutation__
 *
 * To run a mutation, you first call `useCreateTagMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTagMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTagMutation, { data, loading, error }] = useCreateTagMutation({
 *   variables: {
 *      shop_uid: // value for 'shop_uid'
 *      name: // value for 'name'
 *      note: // value for 'note'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useCreateTagMutation(baseOptions?: Apollo.MutationHookOptions<CreateTagMutation, CreateTagMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateTagMutation, CreateTagMutationVariables>(CreateTagDocument, options);
      }
export type CreateTagMutationHookResult = ReturnType<typeof useCreateTagMutation>;
export type CreateTagMutationResult = Apollo.MutationResult<CreateTagMutation>;
export type CreateTagMutationOptions = Apollo.BaseMutationOptions<CreateTagMutation, CreateTagMutationVariables>;
export const CreateTestDocument = gql`
    mutation createTest($text: String!) {
  createTest(input: {text: $text}) {
    uid
    text
  }
}
    `;
export type CreateTestMutationFn = Apollo.MutationFunction<CreateTestMutation, CreateTestMutationVariables>;

/**
 * __useCreateTestMutation__
 *
 * To run a mutation, you first call `useCreateTestMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTestMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTestMutation, { data, loading, error }] = useCreateTestMutation({
 *   variables: {
 *      text: // value for 'text'
 *   },
 * });
 */
export function useCreateTestMutation(baseOptions?: Apollo.MutationHookOptions<CreateTestMutation, CreateTestMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateTestMutation, CreateTestMutationVariables>(CreateTestDocument, options);
      }
export type CreateTestMutationHookResult = ReturnType<typeof useCreateTestMutation>;
export type CreateTestMutationResult = Apollo.MutationResult<CreateTestMutation>;
export type CreateTestMutationOptions = Apollo.BaseMutationOptions<CreateTestMutation, CreateTestMutationVariables>;
export const DeleteImageDocument = gql`
    mutation deleteImage($uid: String!) {
  deleteImage(uid: $uid)
}
    `;
export type DeleteImageMutationFn = Apollo.MutationFunction<DeleteImageMutation, DeleteImageMutationVariables>;

/**
 * __useDeleteImageMutation__
 *
 * To run a mutation, you first call `useDeleteImageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteImageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteImageMutation, { data, loading, error }] = useDeleteImageMutation({
 *   variables: {
 *      uid: // value for 'uid'
 *   },
 * });
 */
export function useDeleteImageMutation(baseOptions?: Apollo.MutationHookOptions<DeleteImageMutation, DeleteImageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteImageMutation, DeleteImageMutationVariables>(DeleteImageDocument, options);
      }
export type DeleteImageMutationHookResult = ReturnType<typeof useDeleteImageMutation>;
export type DeleteImageMutationResult = Apollo.MutationResult<DeleteImageMutation>;
export type DeleteImageMutationOptions = Apollo.BaseMutationOptions<DeleteImageMutation, DeleteImageMutationVariables>;
export const DeleteItemDocument = gql`
    mutation deleteItem($uid: String!) {
  deleteItem(uid: $uid)
}
    `;
export type DeleteItemMutationFn = Apollo.MutationFunction<DeleteItemMutation, DeleteItemMutationVariables>;

/**
 * __useDeleteItemMutation__
 *
 * To run a mutation, you first call `useDeleteItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteItemMutation, { data, loading, error }] = useDeleteItemMutation({
 *   variables: {
 *      uid: // value for 'uid'
 *   },
 * });
 */
export function useDeleteItemMutation(baseOptions?: Apollo.MutationHookOptions<DeleteItemMutation, DeleteItemMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteItemMutation, DeleteItemMutationVariables>(DeleteItemDocument, options);
      }
export type DeleteItemMutationHookResult = ReturnType<typeof useDeleteItemMutation>;
export type DeleteItemMutationResult = Apollo.MutationResult<DeleteItemMutation>;
export type DeleteItemMutationOptions = Apollo.BaseMutationOptions<DeleteItemMutation, DeleteItemMutationVariables>;
export const DeleteShopDocument = gql`
    mutation deleteShop($uid: String!) {
  deleteShop(uid: $uid)
}
    `;
export type DeleteShopMutationFn = Apollo.MutationFunction<DeleteShopMutation, DeleteShopMutationVariables>;

/**
 * __useDeleteShopMutation__
 *
 * To run a mutation, you first call `useDeleteShopMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteShopMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteShopMutation, { data, loading, error }] = useDeleteShopMutation({
 *   variables: {
 *      uid: // value for 'uid'
 *   },
 * });
 */
export function useDeleteShopMutation(baseOptions?: Apollo.MutationHookOptions<DeleteShopMutation, DeleteShopMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteShopMutation, DeleteShopMutationVariables>(DeleteShopDocument, options);
      }
export type DeleteShopMutationHookResult = ReturnType<typeof useDeleteShopMutation>;
export type DeleteShopMutationResult = Apollo.MutationResult<DeleteShopMutation>;
export type DeleteShopMutationOptions = Apollo.BaseMutationOptions<DeleteShopMutation, DeleteShopMutationVariables>;
export const DeleteTagDocument = gql`
    mutation deleteTag($uid: String!) {
  deleteTag(uid: $uid)
}
    `;
export type DeleteTagMutationFn = Apollo.MutationFunction<DeleteTagMutation, DeleteTagMutationVariables>;

/**
 * __useDeleteTagMutation__
 *
 * To run a mutation, you first call `useDeleteTagMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTagMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTagMutation, { data, loading, error }] = useDeleteTagMutation({
 *   variables: {
 *      uid: // value for 'uid'
 *   },
 * });
 */
export function useDeleteTagMutation(baseOptions?: Apollo.MutationHookOptions<DeleteTagMutation, DeleteTagMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteTagMutation, DeleteTagMutationVariables>(DeleteTagDocument, options);
      }
export type DeleteTagMutationHookResult = ReturnType<typeof useDeleteTagMutation>;
export type DeleteTagMutationResult = Apollo.MutationResult<DeleteTagMutation>;
export type DeleteTagMutationOptions = Apollo.BaseMutationOptions<DeleteTagMutation, DeleteTagMutationVariables>;
export const DeleteTestDocument = gql`
    mutation deleteTest($uid: String!) {
  deleteTest(uid: $uid)
}
    `;
export type DeleteTestMutationFn = Apollo.MutationFunction<DeleteTestMutation, DeleteTestMutationVariables>;

/**
 * __useDeleteTestMutation__
 *
 * To run a mutation, you first call `useDeleteTestMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTestMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTestMutation, { data, loading, error }] = useDeleteTestMutation({
 *   variables: {
 *      uid: // value for 'uid'
 *   },
 * });
 */
export function useDeleteTestMutation(baseOptions?: Apollo.MutationHookOptions<DeleteTestMutation, DeleteTestMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteTestMutation, DeleteTestMutationVariables>(DeleteTestDocument, options);
      }
export type DeleteTestMutationHookResult = ReturnType<typeof useDeleteTestMutation>;
export type DeleteTestMutationResult = Apollo.MutationResult<DeleteTestMutation>;
export type DeleteTestMutationOptions = Apollo.BaseMutationOptions<DeleteTestMutation, DeleteTestMutationVariables>;
export const UpdateItemDocument = gql`
    mutation updateItem($uid: String!, $tag_uid: String!, $sort: Int!, $name: String!, $price: Float!, $is_sold: Boolean!, $is_visible: Boolean!, $image_path: String!) {
  updateItem(
    input: {uid: $uid, tag_uid: $tag_uid, sort: $sort, name: $name, price: $price, is_sold: $is_sold, is_visible: $is_visible, image_path: $image_path}
  ) {
    uid
    shop_uid
    tag_uid
    sort
    name
    price
    is_sold
    is_visible
    image_path
  }
}
    `;
export type UpdateItemMutationFn = Apollo.MutationFunction<UpdateItemMutation, UpdateItemMutationVariables>;

/**
 * __useUpdateItemMutation__
 *
 * To run a mutation, you first call `useUpdateItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateItemMutation, { data, loading, error }] = useUpdateItemMutation({
 *   variables: {
 *      uid: // value for 'uid'
 *      tag_uid: // value for 'tag_uid'
 *      sort: // value for 'sort'
 *      name: // value for 'name'
 *      price: // value for 'price'
 *      is_sold: // value for 'is_sold'
 *      is_visible: // value for 'is_visible'
 *      image_path: // value for 'image_path'
 *   },
 * });
 */
export function useUpdateItemMutation(baseOptions?: Apollo.MutationHookOptions<UpdateItemMutation, UpdateItemMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateItemMutation, UpdateItemMutationVariables>(UpdateItemDocument, options);
      }
export type UpdateItemMutationHookResult = ReturnType<typeof useUpdateItemMutation>;
export type UpdateItemMutationResult = Apollo.MutationResult<UpdateItemMutation>;
export type UpdateItemMutationOptions = Apollo.BaseMutationOptions<UpdateItemMutation, UpdateItemMutationVariables>;
export const UpdateShopDocument = gql`
    mutation updateShop($uid: String!, $name: String!, $zip: String!, $address: String!, $tel: String!, $note: String!) {
  updateShop(
    input: {uid: $uid, name: $name, zip: $zip, address: $address, tel: $tel, note: $note}
  ) {
    uid
    name
    zip
    address
    tel
    note
  }
}
    `;
export type UpdateShopMutationFn = Apollo.MutationFunction<UpdateShopMutation, UpdateShopMutationVariables>;

/**
 * __useUpdateShopMutation__
 *
 * To run a mutation, you first call `useUpdateShopMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateShopMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateShopMutation, { data, loading, error }] = useUpdateShopMutation({
 *   variables: {
 *      uid: // value for 'uid'
 *      name: // value for 'name'
 *      zip: // value for 'zip'
 *      address: // value for 'address'
 *      tel: // value for 'tel'
 *      note: // value for 'note'
 *   },
 * });
 */
export function useUpdateShopMutation(baseOptions?: Apollo.MutationHookOptions<UpdateShopMutation, UpdateShopMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateShopMutation, UpdateShopMutationVariables>(UpdateShopDocument, options);
      }
export type UpdateShopMutationHookResult = ReturnType<typeof useUpdateShopMutation>;
export type UpdateShopMutationResult = Apollo.MutationResult<UpdateShopMutation>;
export type UpdateShopMutationOptions = Apollo.BaseMutationOptions<UpdateShopMutation, UpdateShopMutationVariables>;
export const UpdateTagDocument = gql`
    mutation updateTag($uid: String!, $name: String!, $note: String!, $sort: Int!) {
  updateTag(input: {uid: $uid, name: $name, note: $note, sort: $sort}) {
    uid
    shop_uid
    name
    note
    sort
  }
}
    `;
export type UpdateTagMutationFn = Apollo.MutationFunction<UpdateTagMutation, UpdateTagMutationVariables>;

/**
 * __useUpdateTagMutation__
 *
 * To run a mutation, you first call `useUpdateTagMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTagMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTagMutation, { data, loading, error }] = useUpdateTagMutation({
 *   variables: {
 *      uid: // value for 'uid'
 *      name: // value for 'name'
 *      note: // value for 'note'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useUpdateTagMutation(baseOptions?: Apollo.MutationHookOptions<UpdateTagMutation, UpdateTagMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateTagMutation, UpdateTagMutationVariables>(UpdateTagDocument, options);
      }
export type UpdateTagMutationHookResult = ReturnType<typeof useUpdateTagMutation>;
export type UpdateTagMutationResult = Apollo.MutationResult<UpdateTagMutation>;
export type UpdateTagMutationOptions = Apollo.BaseMutationOptions<UpdateTagMutation, UpdateTagMutationVariables>;
export const UpdateTestDocument = gql`
    mutation updateTest($uid: String!, $text: String!) {
  updateTest(input: {uid: $uid, text: $text}) {
    uid
    text
  }
}
    `;
export type UpdateTestMutationFn = Apollo.MutationFunction<UpdateTestMutation, UpdateTestMutationVariables>;

/**
 * __useUpdateTestMutation__
 *
 * To run a mutation, you first call `useUpdateTestMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTestMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTestMutation, { data, loading, error }] = useUpdateTestMutation({
 *   variables: {
 *      uid: // value for 'uid'
 *      text: // value for 'text'
 *   },
 * });
 */
export function useUpdateTestMutation(baseOptions?: Apollo.MutationHookOptions<UpdateTestMutation, UpdateTestMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateTestMutation, UpdateTestMutationVariables>(UpdateTestDocument, options);
      }
export type UpdateTestMutationHookResult = ReturnType<typeof useUpdateTestMutation>;
export type UpdateTestMutationResult = Apollo.MutationResult<UpdateTestMutation>;
export type UpdateTestMutationOptions = Apollo.BaseMutationOptions<UpdateTestMutation, UpdateTestMutationVariables>;
export const FindImageDocument = gql`
    query findImage($uid: String!) {
  image(uid: $uid) {
    item_uid
    image_path
  }
}
    `;

/**
 * __useFindImageQuery__
 *
 * To run a query within a React component, call `useFindImageQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindImageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindImageQuery({
 *   variables: {
 *      uid: // value for 'uid'
 *   },
 * });
 */
export function useFindImageQuery(baseOptions: Apollo.QueryHookOptions<FindImageQuery, FindImageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindImageQuery, FindImageQueryVariables>(FindImageDocument, options);
      }
export function useFindImageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindImageQuery, FindImageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindImageQuery, FindImageQueryVariables>(FindImageDocument, options);
        }
export type FindImageQueryHookResult = ReturnType<typeof useFindImageQuery>;
export type FindImageLazyQueryHookResult = ReturnType<typeof useFindImageLazyQuery>;
export type FindImageQueryResult = Apollo.QueryResult<FindImageQuery, FindImageQueryVariables>;
export const FindItemDocument = gql`
    query findItem($uid: String!) {
  item(uid: $uid) {
    uid
    shop_uid
    tag_uid
    name
    sort
    price
    is_sold
    is_visible
    image_path
  }
}
    `;

/**
 * __useFindItemQuery__
 *
 * To run a query within a React component, call `useFindItemQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindItemQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindItemQuery({
 *   variables: {
 *      uid: // value for 'uid'
 *   },
 * });
 */
export function useFindItemQuery(baseOptions: Apollo.QueryHookOptions<FindItemQuery, FindItemQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindItemQuery, FindItemQueryVariables>(FindItemDocument, options);
      }
export function useFindItemLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindItemQuery, FindItemQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindItemQuery, FindItemQueryVariables>(FindItemDocument, options);
        }
export type FindItemQueryHookResult = ReturnType<typeof useFindItemQuery>;
export type FindItemLazyQueryHookResult = ReturnType<typeof useFindItemLazyQuery>;
export type FindItemQueryResult = Apollo.QueryResult<FindItemQuery, FindItemQueryVariables>;
export const ListItemsByShopIdDocument = gql`
    query listItemsByShopId($shopUid: String!) {
  itemsByShopId(shopUid: $shopUid) {
    uid
    shop_uid
    tag_uid
    name
    sort
    price
    is_sold
    is_visible
    image_path
  }
}
    `;

/**
 * __useListItemsByShopIdQuery__
 *
 * To run a query within a React component, call `useListItemsByShopIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useListItemsByShopIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListItemsByShopIdQuery({
 *   variables: {
 *      shopUid: // value for 'shopUid'
 *   },
 * });
 */
export function useListItemsByShopIdQuery(baseOptions: Apollo.QueryHookOptions<ListItemsByShopIdQuery, ListItemsByShopIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListItemsByShopIdQuery, ListItemsByShopIdQueryVariables>(ListItemsByShopIdDocument, options);
      }
export function useListItemsByShopIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListItemsByShopIdQuery, ListItemsByShopIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListItemsByShopIdQuery, ListItemsByShopIdQueryVariables>(ListItemsByShopIdDocument, options);
        }
export type ListItemsByShopIdQueryHookResult = ReturnType<typeof useListItemsByShopIdQuery>;
export type ListItemsByShopIdLazyQueryHookResult = ReturnType<typeof useListItemsByShopIdLazyQuery>;
export type ListItemsByShopIdQueryResult = Apollo.QueryResult<ListItemsByShopIdQuery, ListItemsByShopIdQueryVariables>;
export const ListItemsByTagIdDocument = gql`
    query listItemsByTagId($tagUid: String!) {
  itemsByTagId(tagUid: $tagUid) {
    uid
    shop_uid
    tag_uid
    name
    sort
    price
    is_sold
    is_visible
    image_path
  }
}
    `;

/**
 * __useListItemsByTagIdQuery__
 *
 * To run a query within a React component, call `useListItemsByTagIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useListItemsByTagIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListItemsByTagIdQuery({
 *   variables: {
 *      tagUid: // value for 'tagUid'
 *   },
 * });
 */
export function useListItemsByTagIdQuery(baseOptions: Apollo.QueryHookOptions<ListItemsByTagIdQuery, ListItemsByTagIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListItemsByTagIdQuery, ListItemsByTagIdQueryVariables>(ListItemsByTagIdDocument, options);
      }
export function useListItemsByTagIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListItemsByTagIdQuery, ListItemsByTagIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListItemsByTagIdQuery, ListItemsByTagIdQueryVariables>(ListItemsByTagIdDocument, options);
        }
export type ListItemsByTagIdQueryHookResult = ReturnType<typeof useListItemsByTagIdQuery>;
export type ListItemsByTagIdLazyQueryHookResult = ReturnType<typeof useListItemsByTagIdLazyQuery>;
export type ListItemsByTagIdQueryResult = Apollo.QueryResult<ListItemsByTagIdQuery, ListItemsByTagIdQueryVariables>;
export const ListTagsByShopIdDocument = gql`
    query listTagsByShopId($shopUid: String!) {
  tagsByShopId(shopUid: $shopUid) {
    uid
    shop_uid
    name
    note
    sort
  }
}
    `;

/**
 * __useListTagsByShopIdQuery__
 *
 * To run a query within a React component, call `useListTagsByShopIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useListTagsByShopIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListTagsByShopIdQuery({
 *   variables: {
 *      shopUid: // value for 'shopUid'
 *   },
 * });
 */
export function useListTagsByShopIdQuery(baseOptions: Apollo.QueryHookOptions<ListTagsByShopIdQuery, ListTagsByShopIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListTagsByShopIdQuery, ListTagsByShopIdQueryVariables>(ListTagsByShopIdDocument, options);
      }
export function useListTagsByShopIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListTagsByShopIdQuery, ListTagsByShopIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListTagsByShopIdQuery, ListTagsByShopIdQueryVariables>(ListTagsByShopIdDocument, options);
        }
export type ListTagsByShopIdQueryHookResult = ReturnType<typeof useListTagsByShopIdQuery>;
export type ListTagsByShopIdLazyQueryHookResult = ReturnType<typeof useListTagsByShopIdLazyQuery>;
export type ListTagsByShopIdQueryResult = Apollo.QueryResult<ListTagsByShopIdQuery, ListTagsByShopIdQueryVariables>;
export const FindShopDocument = gql`
    query findShop($uid: String!) {
  shop(uid: $uid) {
    uid
    name
    zip
    address
    tel
    note
  }
}
    `;

/**
 * __useFindShopQuery__
 *
 * To run a query within a React component, call `useFindShopQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindShopQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindShopQuery({
 *   variables: {
 *      uid: // value for 'uid'
 *   },
 * });
 */
export function useFindShopQuery(baseOptions: Apollo.QueryHookOptions<FindShopQuery, FindShopQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindShopQuery, FindShopQueryVariables>(FindShopDocument, options);
      }
export function useFindShopLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindShopQuery, FindShopQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindShopQuery, FindShopQueryVariables>(FindShopDocument, options);
        }
export type FindShopQueryHookResult = ReturnType<typeof useFindShopQuery>;
export type FindShopLazyQueryHookResult = ReturnType<typeof useFindShopLazyQuery>;
export type FindShopQueryResult = Apollo.QueryResult<FindShopQuery, FindShopQueryVariables>;
export const ListShopsDocument = gql`
    query listShops {
  shops {
    uid
    name
    zip
    address
    tel
    note
  }
}
    `;

/**
 * __useListShopsQuery__
 *
 * To run a query within a React component, call `useListShopsQuery` and pass it any options that fit your needs.
 * When your component renders, `useListShopsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListShopsQuery({
 *   variables: {
 *   },
 * });
 */
export function useListShopsQuery(baseOptions?: Apollo.QueryHookOptions<ListShopsQuery, ListShopsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListShopsQuery, ListShopsQueryVariables>(ListShopsDocument, options);
      }
export function useListShopsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListShopsQuery, ListShopsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListShopsQuery, ListShopsQueryVariables>(ListShopsDocument, options);
        }
export type ListShopsQueryHookResult = ReturnType<typeof useListShopsQuery>;
export type ListShopsLazyQueryHookResult = ReturnType<typeof useListShopsLazyQuery>;
export type ListShopsQueryResult = Apollo.QueryResult<ListShopsQuery, ListShopsQueryVariables>;
export const FindTagDocument = gql`
    query findTag($uid: String!) {
  tag(uid: $uid) {
    uid
    shop_uid
    name
    note
    sort
  }
}
    `;

/**
 * __useFindTagQuery__
 *
 * To run a query within a React component, call `useFindTagQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindTagQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindTagQuery({
 *   variables: {
 *      uid: // value for 'uid'
 *   },
 * });
 */
export function useFindTagQuery(baseOptions: Apollo.QueryHookOptions<FindTagQuery, FindTagQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindTagQuery, FindTagQueryVariables>(FindTagDocument, options);
      }
export function useFindTagLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindTagQuery, FindTagQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindTagQuery, FindTagQueryVariables>(FindTagDocument, options);
        }
export type FindTagQueryHookResult = ReturnType<typeof useFindTagQuery>;
export type FindTagLazyQueryHookResult = ReturnType<typeof useFindTagLazyQuery>;
export type FindTagQueryResult = Apollo.QueryResult<FindTagQuery, FindTagQueryVariables>;
export const FindTestDocument = gql`
    query findTest($uid: String!) {
  test(uid: $uid) {
    uid
    text
  }
}
    `;

/**
 * __useFindTestQuery__
 *
 * To run a query within a React component, call `useFindTestQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindTestQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindTestQuery({
 *   variables: {
 *      uid: // value for 'uid'
 *   },
 * });
 */
export function useFindTestQuery(baseOptions: Apollo.QueryHookOptions<FindTestQuery, FindTestQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindTestQuery, FindTestQueryVariables>(FindTestDocument, options);
      }
export function useFindTestLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindTestQuery, FindTestQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindTestQuery, FindTestQueryVariables>(FindTestDocument, options);
        }
export type FindTestQueryHookResult = ReturnType<typeof useFindTestQuery>;
export type FindTestLazyQueryHookResult = ReturnType<typeof useFindTestLazyQuery>;
export type FindTestQueryResult = Apollo.QueryResult<FindTestQuery, FindTestQueryVariables>;
export const ListTestsDocument = gql`
    query listTests {
  tests {
    uid
    text
  }
}
    `;

/**
 * __useListTestsQuery__
 *
 * To run a query within a React component, call `useListTestsQuery` and pass it any options that fit your needs.
 * When your component renders, `useListTestsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListTestsQuery({
 *   variables: {
 *   },
 * });
 */
export function useListTestsQuery(baseOptions?: Apollo.QueryHookOptions<ListTestsQuery, ListTestsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListTestsQuery, ListTestsQueryVariables>(ListTestsDocument, options);
      }
export function useListTestsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListTestsQuery, ListTestsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListTestsQuery, ListTestsQueryVariables>(ListTestsDocument, options);
        }
export type ListTestsQueryHookResult = ReturnType<typeof useListTestsQuery>;
export type ListTestsLazyQueryHookResult = ReturnType<typeof useListTestsLazyQuery>;
export type ListTestsQueryResult = Apollo.QueryResult<ListTestsQuery, ListTestsQueryVariables>;