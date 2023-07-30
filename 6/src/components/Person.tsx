import { IPerson } from '../contracts/IPerson';

export function Person(props: IPerson) {
  return (
    <div>
      <p>Person Name: {props.firstName}</p>
      <p>Person Lastname: {props.lastName}</p>
      <p>Person Email: {props.personEmail}</p>
    </div>
  );
}
