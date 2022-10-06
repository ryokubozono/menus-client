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

export type CreateInput = {
  text: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createTest: Test;
  deleteTest: Scalars['String'];
  updateTest: Test;
};


export type MutationCreateTestArgs = {
  input: CreateInput;
};


export type MutationDeleteTestArgs = {
  input: Scalars['String'];
};


export type MutationUpdateTestArgs = {
  input: UpdateInput;
};

export type Query = {
  __typename?: 'Query';
  test: Test;
  tests: Array<Test>;
};


export type QueryTestArgs = {
  input: Scalars['String'];
};

export type Test = {
  __typename?: 'Test';
  text: Scalars['String'];
  uid: Scalars['String'];
};

export type UpdateInput = {
  text: Scalars['String'];
  uid: Scalars['String'];
};

export type CreateTestMutationVariables = Exact<{
  text: Scalars['String'];
}>;


export type CreateTestMutation = { __typename?: 'Mutation', createTest: { __typename?: 'Test', uid: string, text: string } };

export type DeleteTestMutationVariables = Exact<{
  uid: Scalars['String'];
}>;


export type DeleteTestMutation = { __typename?: 'Mutation', deleteTest: string };

export type UpdateTestMutationVariables = Exact<{
  uid: Scalars['String'];
  text: Scalars['String'];
}>;


export type UpdateTestMutation = { __typename?: 'Mutation', updateTest: { __typename?: 'Test', uid: string, text: string } };

export type FindTestQueryVariables = Exact<{
  uid: Scalars['String'];
}>;


export type FindTestQuery = { __typename?: 'Query', test: { __typename?: 'Test', uid: string, text: string } };

export type ListTestsQueryVariables = Exact<{ [key: string]: never; }>;


export type ListTestsQuery = { __typename?: 'Query', tests: Array<{ __typename?: 'Test', uid: string, text: string }> };


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
export const DeleteTestDocument = gql`
    mutation deleteTest($uid: String!) {
  deleteTest(input: $uid)
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
export const FindTestDocument = gql`
    query findTest($uid: String!) {
  test(input: $uid) {
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