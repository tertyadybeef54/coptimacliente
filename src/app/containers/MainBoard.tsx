import { LateralMenu } from "./LateralMenu";
import { TopMenu } from "./TopMenu";
import { RoutingBoard } from "../utilities/routes/RoutingBoard";

export const MainBoard = () => {
  return (
    <div>
      <TopMenu />
      <LateralMenu />
      <RoutingBoard />
    </div>
  );
};