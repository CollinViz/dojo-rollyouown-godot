// @ts-nocheck
import { GraphQLClient } from 'graphql-request';
import { GraphQLClientRequestHeaders } from 'graphql-request/build/cjs/types';
import { print } from 'graphql'
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Cursor: { input: any; output: any; }
  DateTime: { input: any; output: any; }
  felt252: { input: any; output: any; }
  u8: { input: any; output: any; }
  u32: { input: any; output: any; }
  u128: { input: any; output: any; }
  usize: { input: any; output: any; }
};

export type ComponentUnion = Moves | Player | Position;

export enum Direction {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type Entity = {
  __typename?: 'Entity';
  componentNames?: Maybe<Scalars['String']['output']>;
  components?: Maybe<Array<Maybe<ComponentUnion>>>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  keys?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type EntityConnection = {
  __typename?: 'EntityConnection';
  edges?: Maybe<Array<Maybe<EntityEdge>>>;
  totalCount: Scalars['Int']['output'];
};

export type EntityEdge = {
  __typename?: 'EntityEdge';
  cursor: Scalars['Cursor']['output'];
  node?: Maybe<Entity>;
};

export type Event = {
  __typename?: 'Event';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  data?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  keys?: Maybe<Scalars['String']['output']>;
  systemCall: SystemCall;
  systemCallId?: Maybe<Scalars['Int']['output']>;
};

export type EventConnection = {
  __typename?: 'EventConnection';
  edges?: Maybe<Array<Maybe<EventEdge>>>;
  totalCount: Scalars['Int']['output'];
};

export type EventEdge = {
  __typename?: 'EventEdge';
  cursor: Scalars['Cursor']['output'];
  node?: Maybe<Event>;
};

export type Moves = {
  __typename?: 'Moves';
  entity?: Maybe<Entity>;
  remaining?: Maybe<Scalars['u8']['output']>;
};

export type MovesConnection = {
  __typename?: 'MovesConnection';
  edges?: Maybe<Array<Maybe<MovesEdge>>>;
  totalCount: Scalars['Int']['output'];
};

export type MovesEdge = {
  __typename?: 'MovesEdge';
  cursor: Scalars['Cursor']['output'];
  node?: Maybe<Moves>;
};

export type MovesOrder = {
  direction: Direction;
  field: MovesOrderOrderField;
};

export enum MovesOrderOrderField {
  Remaining = 'REMAINING'
}

export type MovesWhereInput = {
  remaining?: InputMaybe<Scalars['Int']['input']>;
  remainingGT?: InputMaybe<Scalars['Int']['input']>;
  remainingGTE?: InputMaybe<Scalars['Int']['input']>;
  remainingLT?: InputMaybe<Scalars['Int']['input']>;
  remainingLTE?: InputMaybe<Scalars['Int']['input']>;
  remainingNEQ?: InputMaybe<Scalars['Int']['input']>;
};

export type Player = {
  __typename?: 'Player';
  cash?: Maybe<Scalars['u128']['output']>;
  entity?: Maybe<Entity>;
  health?: Maybe<Scalars['u8']['output']>;
  location_id?: Maybe<Scalars['felt252']['output']>;
  turns_remaining?: Maybe<Scalars['usize']['output']>;
};

export type PlayerConnection = {
  __typename?: 'PlayerConnection';
  edges?: Maybe<Array<Maybe<PlayerEdge>>>;
  totalCount: Scalars['Int']['output'];
};

export type PlayerEdge = {
  __typename?: 'PlayerEdge';
  cursor: Scalars['Cursor']['output'];
  node?: Maybe<Player>;
};

export type PlayerOrder = {
  direction: Direction;
  field: PlayerOrderOrderField;
};

export enum PlayerOrderOrderField {
  Cash = 'CASH',
  Health = 'HEALTH',
  LocationId = 'LOCATION_ID',
  TurnsRemaining = 'TURNS_REMAINING'
}

export type PlayerWhereInput = {
  cash?: InputMaybe<Scalars['String']['input']>;
  cashGT?: InputMaybe<Scalars['String']['input']>;
  cashGTE?: InputMaybe<Scalars['String']['input']>;
  cashLT?: InputMaybe<Scalars['String']['input']>;
  cashLTE?: InputMaybe<Scalars['String']['input']>;
  cashNEQ?: InputMaybe<Scalars['String']['input']>;
  health?: InputMaybe<Scalars['Int']['input']>;
  healthGT?: InputMaybe<Scalars['Int']['input']>;
  healthGTE?: InputMaybe<Scalars['Int']['input']>;
  healthLT?: InputMaybe<Scalars['Int']['input']>;
  healthLTE?: InputMaybe<Scalars['Int']['input']>;
  healthNEQ?: InputMaybe<Scalars['Int']['input']>;
  location_id?: InputMaybe<Scalars['String']['input']>;
  location_idGT?: InputMaybe<Scalars['String']['input']>;
  location_idGTE?: InputMaybe<Scalars['String']['input']>;
  location_idLT?: InputMaybe<Scalars['String']['input']>;
  location_idLTE?: InputMaybe<Scalars['String']['input']>;
  location_idNEQ?: InputMaybe<Scalars['String']['input']>;
  turns_remaining?: InputMaybe<Scalars['Int']['input']>;
  turns_remainingGT?: InputMaybe<Scalars['Int']['input']>;
  turns_remainingGTE?: InputMaybe<Scalars['Int']['input']>;
  turns_remainingLT?: InputMaybe<Scalars['Int']['input']>;
  turns_remainingLTE?: InputMaybe<Scalars['Int']['input']>;
  turns_remainingNEQ?: InputMaybe<Scalars['Int']['input']>;
};

export type Position = {
  __typename?: 'Position';
  entity?: Maybe<Entity>;
  location_id?: Maybe<Scalars['felt252']['output']>;
  x?: Maybe<Scalars['u32']['output']>;
  y?: Maybe<Scalars['u32']['output']>;
};

export type PositionConnection = {
  __typename?: 'PositionConnection';
  edges?: Maybe<Array<Maybe<PositionEdge>>>;
  totalCount: Scalars['Int']['output'];
};

export type PositionEdge = {
  __typename?: 'PositionEdge';
  cursor: Scalars['Cursor']['output'];
  node?: Maybe<Position>;
};

export type PositionOrder = {
  direction: Direction;
  field: PositionOrderOrderField;
};

export enum PositionOrderOrderField {
  LocationId = 'LOCATION_ID',
  X = 'X',
  Y = 'Y'
}

export type PositionWhereInput = {
  location_id?: InputMaybe<Scalars['String']['input']>;
  location_idGT?: InputMaybe<Scalars['String']['input']>;
  location_idGTE?: InputMaybe<Scalars['String']['input']>;
  location_idLT?: InputMaybe<Scalars['String']['input']>;
  location_idLTE?: InputMaybe<Scalars['String']['input']>;
  location_idNEQ?: InputMaybe<Scalars['String']['input']>;
  x?: InputMaybe<Scalars['Int']['input']>;
  xGT?: InputMaybe<Scalars['Int']['input']>;
  xGTE?: InputMaybe<Scalars['Int']['input']>;
  xLT?: InputMaybe<Scalars['Int']['input']>;
  xLTE?: InputMaybe<Scalars['Int']['input']>;
  xNEQ?: InputMaybe<Scalars['Int']['input']>;
  y?: InputMaybe<Scalars['Int']['input']>;
  yGT?: InputMaybe<Scalars['Int']['input']>;
  yGTE?: InputMaybe<Scalars['Int']['input']>;
  yLT?: InputMaybe<Scalars['Int']['input']>;
  yLTE?: InputMaybe<Scalars['Int']['input']>;
  yNEQ?: InputMaybe<Scalars['Int']['input']>;
};

export type Query = {
  __typename?: 'Query';
  entities?: Maybe<EntityConnection>;
  entity: Entity;
  event: Event;
  events?: Maybe<EventConnection>;
  movesComponents?: Maybe<MovesConnection>;
  playerComponents?: Maybe<PlayerConnection>;
  positionComponents?: Maybe<PositionConnection>;
  system: System;
  systemCall: SystemCall;
  systemCalls?: Maybe<SystemCallConnection>;
  systems?: Maybe<SystemConnection>;
};


export type QueryEntitiesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  keys?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryEntityArgs = {
  id: Scalars['ID']['input'];
};


export type QueryEventArgs = {
  id: Scalars['ID']['input'];
};


export type QueryMovesComponentsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<MovesOrder>;
  where?: InputMaybe<MovesWhereInput>;
};


export type QueryPlayerComponentsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<PlayerOrder>;
  where?: InputMaybe<PlayerWhereInput>;
};


export type QueryPositionComponentsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<PositionOrder>;
  where?: InputMaybe<PositionWhereInput>;
};


export type QuerySystemArgs = {
  id: Scalars['ID']['input'];
};


export type QuerySystemCallArgs = {
  id: Scalars['Int']['input'];
};

export type System = {
  __typename?: 'System';
  classHash?: Maybe<Scalars['felt252']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  systemCalls: Array<SystemCall>;
  transactionHash?: Maybe<Scalars['felt252']['output']>;
};

export type SystemCall = {
  __typename?: 'SystemCall';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  data?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  system: System;
  systemId?: Maybe<Scalars['ID']['output']>;
  transactionHash?: Maybe<Scalars['String']['output']>;
};

export type SystemCallConnection = {
  __typename?: 'SystemCallConnection';
  edges?: Maybe<Array<Maybe<SystemCallEdge>>>;
  totalCount: Scalars['Int']['output'];
};

export type SystemCallEdge = {
  __typename?: 'SystemCallEdge';
  cursor: Scalars['Cursor']['output'];
  node?: Maybe<SystemCall>;
};

export type SystemConnection = {
  __typename?: 'SystemConnection';
  edges?: Maybe<Array<Maybe<SystemEdge>>>;
  totalCount: Scalars['Int']['output'];
};

export type SystemEdge = {
  __typename?: 'SystemEdge';
  cursor: Scalars['Cursor']['output'];
  node?: Maybe<System>;
};

export type GetEntitiesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetEntitiesQuery = { __typename?: 'Query', entities?: { __typename?: 'EntityConnection', edges?: Array<{ __typename?: 'EntityEdge', node?: { __typename?: 'Entity', keys?: Array<string | null> | null, components?: Array<{ __typename: 'Moves', remaining?: any | null } | { __typename: 'Player' } | { __typename: 'Position', x?: any | null, y?: any | null } | null> | null } | null } | null> | null } | null };


export const GetEntitiesDocument = gql`
    query getEntities {
  entities(keys: ["%"]) {
    edges {
      node {
        keys
        components {
          __typename
          ... on Moves {
            remaining
          }
          ... on Position {
            x
            y
          }
        }
      }
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();
const GetEntitiesDocumentString = print(GetEntitiesDocument);
export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getEntities(variables?: GetEntitiesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: GetEntitiesQuery; extensions?: any; headers: Dom.Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<GetEntitiesQuery>(GetEntitiesDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getEntities', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;