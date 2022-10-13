//@ts-ignore
import { publicApiFunction } from "@dbs/utility";

export default function Root(props) {
  publicApiFunction();
  return <section>{props.name} is mounted!</section>;
}
