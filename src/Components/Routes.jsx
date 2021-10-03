import { Switch, Route } from "react-router-dom";
import LuckyBirthday from "../LuckyBirthDay/LuckyBirthday";
import PalindromeBirthday from "../PalindromeBirthday/PalindromeBIrthday";
import ProfitLoss from "../ProfitLoss/ProfitLoss";
import Home from "./Home";
import Quiz1 from "../Quiz/Quiz1";
import Quiz2 from "../Quiz/Quiz2";
import Quiz3 from "../Quiz/Quiz3";
import Quiz4 from "../Quiz/Quiz4";
import Quiz5 from "../Quiz/Quiz5";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/lucky_birthday" component={LuckyBirthday} />
      <Route exact path="/palindrome_birthday" component={PalindromeBirthday} />
      <Route exact path="/profit_loss" component={ProfitLoss} />
      <Route
        exact
        path="/triangle_quiz/triangle_properties"
        component={Quiz2}
      />
      <Route exact path="/triangle_quiz/third_angle" component={Quiz3} />
      <Route exact path="/triangle_quiz/hypotenuse" component={Quiz4} />
      <Route exact path="/triangle_quiz/area_of_Triangle" component={Quiz5} />
      <Route exact path="/triangle_quiz" component={Quiz1} />
      <Route component={Home} />
    </Switch>
  );
}
