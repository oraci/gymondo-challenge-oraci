/**
 * Action types
 */
export enum WorkoutsTypes {
  LOAD_REQUEST = '@workouts/LOAD_REQUEST',
  LOAD_SUCCCES = '@workouts/LOAD_SUCCCES',
  LOAD_FAILURE = '@workouts/LOAD_FAILURE',
}

/**
 * Data types
 */
export interface Workout {
  id: number;
  name: string;
  description: string;
  startDate: Date;
}

/**
 * State type
 */
export interface WorkoutsState {
  readonly data: Workout[];
  readonly loading: boolean;
  readonly error: boolean;
}