import { useState, useEffect } from "react";
import { calcBMI, calcIdealWeight, getBmiName } from "../utils";
import RadioGroup from "./RadioGroup";
import Input from "./Input";
import Result from "./Result";
import styles from "./Form.module.css";

export default function Form() {
  const [system, setSystem] = useState("metric");
  const [metric, setMetric] = useState({ cm: "", kg: "" });
  const [imperial, setImperial] = useState({ ft: "", in: "", st: "", lbs: "" });
  const [bmi, setBmi] = useState({
    title: "",
    number: 0,
    idealMin: 0,
    idealMax: 0,
  });

  function handleSystemChange(value) {
    setMetric({ cm: "", kg: "" });
    setImperial({ ft: "", in: "", st: "", lbs: "" });
    setBmi({ title: "", number: 0, idealMin: 0, idealMax: 0 });
    setSystem(value);
  }

  function handleValueChange(id, value) {
    if (system === "metric") {
      setMetric((previous) => ({ ...previous, [id]: value }));
    }

    if (system === "imperial") {
      setImperial((previous) => ({ ...previous, [id]: value }));
    }
  }

  useEffect(() => {
    let result, weight, height, idealWeightMin, idealWeightMax;
    if (system === "metric") {
      if (!metric.cm || !metric.kg) return;
      weight = metric.kg;
      height = metric.cm;
    }

    if (system === "imperial") {
      if (!imperial.ft || !imperial.in || !imperial.st || !imperial.lbs) return;
      weight = imperial.st * 14 + imperial.lbs;
      height = imperial.ft * 12 + imperial.in;
    }

    result = calcBMI(system, weight, height);
    idealWeightMin = calcIdealWeight(system, 18.5, height);
    idealWeightMax = calcIdealWeight(system, 24.9, height);

    if (isNaN(result)) {
      setBmi({ title: "", number: 0, idealMin: 0, idealMax: 0 });
    } else {
      const title = getBmiName(result);
      setBmi(() => ({
        title: title,
        number: result,
        idealMin: idealWeightMin,
        idealMax: idealWeightMax,
      }));
    }
  }, [system, metric, imperial]);

  return (
    <form className={styles.form}>
      <p className={`title title--m ${styles.title}`}>
        Enter your details below
      </p>
      <RadioGroup value={system} onSystemChange={handleSystemChange} />
      <div
        className={[
          styles.container,
          system === "metric" ? styles["container--metric"] : "",
        ].join(" ")}
      >
        <fieldset className={styles.fieldset}>
          <label
            className={styles.label}
            htmlFor={system === "metric" ? "cm" : "ft"}
          >
            Height
          </label>
          {system === "metric" && (
            <Input
              id="cm"
              sizeType="cm"
              onValueChange={handleValueChange}
              value={metric.cm}
            />
          )}
          {system === "imperial" && (
            <>
              <Input
                id="ft"
                sizeType="ft"
                onValueChange={handleValueChange}
                value={imperial.ft}
              />
              <Input
                id="in"
                sizeType="in"
                onValueChange={handleValueChange}
                value={imperial.in}
              />
            </>
          )}
        </fieldset>
        <fieldset className={styles.fieldset}>
          <label
            className={styles.label}
            htmlFor={system === "metric" ? "kg" : "st"}
          >
            Weight
          </label>
          {system === "metric" && (
            <Input
              id="kg"
              sizeType="kg"
              onValueChange={handleValueChange}
              value={metric.kg}
            />
          )}
          {system === "imperial" && (
            <>
              <Input
                id="st"
                sizeType="st"
                onValueChange={handleValueChange}
                value={imperial.st}
              />
              <Input
                id="lbs"
                sizeType="lbs"
                onValueChange={handleValueChange}
                value={imperial.lbs}
              />
            </>
          )}
        </fieldset>
      </div>
      <Result system={system} bmi={bmi} />
    </form>
  );
}
