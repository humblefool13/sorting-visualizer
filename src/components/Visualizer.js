/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import Button from "./assets/Button";
import Dropdown from "./assets/Dropdown";
import Slider from "./assets/Slider";

const Visualizer = () => {
  const [primaryArray, setPrimaryArray] = useState([]);
  const [algorithm, setAlgorithm] = useState("bubbleSort");
  const [animationSpeed, setAnimationSpeed] = useState(150);
  const [ARRAYSIZE, setArraySize] = useState(50);
  const [disableOptions, setDisableOptions] = useState(false);
  const [startTime, setStartTime] = useState(null);

  const description = {
    "Bubble Sort":
      'Bubble Sort is a simple and inefficient sorting algorithm. It repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. The largest unsorted element "bubbles up" to its correct position in each pass. While easy to understand, its time complexity is O(n^2), making it impractical for large datasets.',
    "Selection Sort":
      "Selection Sort is a basic sorting algorithm that divides the input list into two parts: a sorted and an unsorted portion. It repeatedly selects the smallest (or largest) element from the unsorted portion and moves it to the sorted part. Despite its simplicity, it also has a time complexity of O(n^2), making it less efficient for larger datasets.",
    "Insertion Sort":
      "Insertion Sort is another elementary sorting algorithm that works by taking one element at a time and inserting it into its suitable place within the already sorted part of the list. It is similar to sorting a hand of cards in a card game, assuming the first card is sorted and then arranging the remaining cards. It has an average time complexity of O(n^2) but performs well with nearly sorted data.",
    "Merge Sort":
      "Merge Sort is a highly efficient sorting algorithm that follows the divide-and-conquer approach. It divides the list into smaller sublists, recursively sorts them, and then merges them back together. It ensures stable sorting and has a consistent time complexity of O(n log n), making it ideal for larger datasets.",
    "Quick Sort":
      'Quick Sort is a widely used sorting algorithm known for its speed and efficiency. It selects a "pivot" element and partitions the list so that elements smaller than the pivot are on the left, and those greater are on the right. This partitioning process is applied recursively, resulting in a sorting method with an average time complexity of O(n log n).',
  };

  const randomizeArray = () => {
    let array = [];
    for (let i = 0; i < ARRAYSIZE; i++) {
      array.push(randomVals(20, 400));
    }
    setPrimaryArray(array);
    for (let i = 0; i < primaryArray.length; i++) {
      let bar = document.getElementById(i).style;
      bar.backgroundColor = "#ff7f50";
    }
  };

  const randomVals = (min, max) => {
    let randomVal = Math.floor(Math.random() * (max - min + 1) + min);
    return randomVal;
  };

  useEffect(() => {
    randomizeArray();
  }, []);

  useEffect(() => {
    randomizeArray();
  }, [ARRAYSIZE]);

  const sleep = (milliSeconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliSeconds));
  };

  const finishedAnimation = async () => {
    for (let i = 0; i < primaryArray.length; i++) {
      let bar = document.getElementById(i).style;
      bar.backgroundColor = "green";
      await sleep(animationSpeed);
    }
    setDisableOptions(false);
  };

  const handleSorting = () => {
    setStartTime(Date.now());
    setDisableOptions(true);
    switch (algorithm) {
      case "bubbleSort":
        bubbleSort();
        break;
      case "selectionSort":
        selectionSort();
        break;
      case "insertionSort":
        insertionSort();
        break;
      case "mergeSort":
        mergeSort();
        break;
      case "quickSort":
        quickSort();
        break;
      default:
        break;
    }
    switch (algorithm.name) {
      case "Bubble Sort":
        bubbleSort();
        break;
      case "Selection Sort":
        selectionSort();
        break;
      case "Insertion Sort":
        insertionSort();
        break;
      case "Merge Sort":
        mergeSort();
        break;
      case "Quick Sort":
        quickSort();
        break;
      default:
        break;
    }
  };

  // ------------ ALGORITHMS ------------ //

  // Bubble Sort
  const bubbleSort = async () => {
    let currentArr = primaryArray;
    let sorted = false;
    setAlgorithm({ name: "Bubble Sort", timeComplexity: "O(n^2)" });

    while (!sorted) {
      sorted = true;

      for (let i = 0; i < currentArr.length - 1; i++) {
        for (let j = 0; j < currentArr.length - i - 1; j++) {
          if (currentArr[j] > currentArr[j + 1]) {
            let temp = currentArr[j];
            currentArr[j] = currentArr[j + 1];
            currentArr[j + 1] = temp;
            setPrimaryArray([...primaryArray, currentArr]);

            let bar1 = document.getElementById(j).style;
            let bar2 = document.getElementById(j + 1).style;
            bar1.backgroundColor = "#DC143C";
            bar2.backgroundColor = "#6A5ACD";

            await sleep(animationSpeed);

            bar1.backgroundColor = "#FF7F50";
            bar2.backgroundColor = "#FF7F50";

            sorted = false;
          }
        }
      }
      if (sorted) finishedAnimation();
    }
  };

  // Selection Sort
  const selectionSort = async () => {
    let currentArr = primaryArray;
    let sorted = false;
    setAlgorithm({ name: "Selection Sort", timeComplexity: "O(n^2)" });

    while (!sorted) {
      sorted = true;

      for (let i = 0; i < currentArr.length - 1; i++) {
        for (let j = i + 1; j < currentArr.length; j++) {
          if (currentArr[i] > currentArr[j]) {
            let swap1 = currentArr[i];
            let swap2 = currentArr[j];
            currentArr[i] = swap2;
            currentArr[j] = swap1;
            setPrimaryArray([...primaryArray, currentArr]);

            let bar1 = document.getElementById(i).style;
            let bar2 = document.getElementById(j).style;
            bar1.backgroundColor = "#DC143C";
            bar2.backgroundColor = "#6A5ACD";

            await sleep(animationSpeed);

            bar1.backgroundColor = "#FF7F50";
            bar2.backgroundColor = "#FF7F50";

            sorted = false;
          }
        }
      }
      if (sorted) finishedAnimation();
    }
  };

  // Insertion Sort
  const insertionSort = async () => {
    let currentArr = primaryArray;
    let sorted = false;
    setAlgorithm({ name: "Insertion Sort", timeComplexity: "O(n^2)" });

    while (!sorted) {
      sorted = true;

      for (let i = 1; i < currentArr.length; i++) {
        let current = currentArr[i];
        let j = i - 1;
        while (j >= 0 && currentArr[j] > current) {
          currentArr[j + 1] = currentArr[j];
          setPrimaryArray([...primaryArray, currentArr]);

          let bar1 = document.getElementById(j + 1).style;
          let bar2 = document.getElementById(j).style;
          bar1.backgroundColor = "#DC143C";
          bar2.backgroundColor = "#6A5ACD";

          await sleep(animationSpeed);

          bar1.backgroundColor = "#FF7F50";
          bar2.backgroundColor = "#FF7F50";

          j--;
          sorted = false;
        }
        currentArr[j + 1] = current;
        setPrimaryArray([...primaryArray, currentArr]);
      }
      if (sorted) finishedAnimation();
    }
  };

  // Merge Sort
  const mergeSort = async () => {
    let currentArr = primaryArray;
    setAlgorithm({ name: "Merge Sort", timeComplexity: "O(n log(n))" });

    await sort(currentArr, 0, currentArr.length - 1);
    finishedAnimation();
  };

  const sort = async (arr, low, high) => {
    if (low < high) {
      let mid = Math.floor((low + high) / 2);
      await sort(arr, low, mid);
      await sort(arr, mid + 1, high);
      await merge(arr, low, mid, high);
    }
  };

  const merge = async (arr, low, mid, high) => {
    let i = low;
    let j = mid + 1;
    let k = 0;
    let tempArr = [];

    while (i <= mid && j <= high) {
      if (arr[i] < arr[j]) {
        tempArr[k] = arr[i];
        i++;
        k++;
      } else {
        tempArr[k] = arr[j];
        j++;
        k++;
      }
      setPrimaryArray([...primaryArray, tempArr]);

      let bar1 = document.getElementById(i).style;
      let bar2 = document.getElementById(j).style;
      bar1.backgroundColor = "#DC143C";
      bar2.backgroundColor = "#6A5ACD";

      await sleep(animationSpeed);

      bar1.backgroundColor = "#FF7F50";
      bar2.backgroundColor = "#FF7F50";
    }

    while (i <= mid) {
      tempArr[k] = arr[i];

      setPrimaryArray([...primaryArray, tempArr]);

      let bar1 = document.getElementById(i).style;
      let bar2 = document.getElementById(j).style;
      bar1.backgroundColor = "#DC143C";
      bar2.backgroundColor = "#6A5ACD";

      await sleep(animationSpeed);

      bar1.backgroundColor = "#FF7F50";
      bar2.backgroundColor = "#FF7F50";

      i++;
      k++;
    }

    while (j <= high) {
      tempArr[k] = arr[j];

      setPrimaryArray([...primaryArray, tempArr]);

      let bar1 = document.getElementById(i).style;
      let bar2 = document.getElementById(j).style;
      bar1.backgroundColor = "#DC143C";
      bar2.backgroundColor = "#6A5ACD";

      await sleep(animationSpeed);

      bar1.backgroundColor = "#FF7F50";
      bar2.backgroundColor = "#FF7F50";

      j++;
      k++;
    }

    for (let i = low; i <= high; i++) {
      arr[i] = tempArr[i - low];
      setPrimaryArray([...primaryArray, arr]);
    }
  };

  // Quick Sort
  const quickSort = async () => {
    setAlgorithm({ name: "Quick Sort", timeComplexity: "O(n log(n))" });
    let currentArr = primaryArray;

    await sorts(currentArr, 0, currentArr.length - 1);
    finishedAnimation();
  };

  const sorts = async (arr, left, right) => {
    if (left < right) {
      let partitionIndex = partition(arr, left, right);

      setPrimaryArray([...primaryArray, arr]);
      await sleep(animationSpeed);

      await sorts(arr, left, partitionIndex - 1);
      await sorts(arr, partitionIndex + 1, right);
    }
  };

  const partition = (arr, left, right) => {
    let pivot = arr[right];
    let i = left - 1;

    for (let j = left; j < right; j++) {
      if (arr[j] < pivot) {
        i++;
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;

        let bar1 = document.getElementById(i).style;
        let bar2 = document.getElementById(j).style;
        bar1.backgroundColor = "#DC143C";
        bar2.backgroundColor = "#6A5ACD";

        setTimeout(() => {
          bar1.backgroundColor = "#ff7f50";
          bar2.backgroundColor = "#ff7f50";
        }, 200);

        setPrimaryArray([...primaryArray, arr]);
      }
    }

    let temp = arr[i + 1];
    arr[i + 1] = arr[right];
    arr[right] = temp;

    return i + 1;
  };

  const formatTime = (timestamp) => {
    const timestampDifference = Date.now() - timestamp;
    const timestampDifferenceCentiSeconds = parseInt(timestampDifference / 10);
    const timestampDifferenceSeconds = parseInt(
      timestampDifferenceCentiSeconds / 100
    );
    if (timestampDifferenceSeconds <= 60) {
      return `Time taken: ${timestampDifferenceSeconds}.${
        timestampDifferenceCentiSeconds % 100
      } seconds`;
    } else {
      const timeSeconds = timestampDifferenceSeconds % 60;
      const timeMinutes = parseInt(timestampDifferenceSeconds / 60);
      return `Time taken: ${timeMinutes} minute ${timeSeconds}.${
        timestampDifferenceCentiSeconds % 100
      } seconds`;
    }
  };

  return (
    <div style={{ width: "100%" }}>
      <div className="header">
        <Button
          type="NEWARRAY"
          name="New Array"
          onClick={randomizeArray}
          disabled={disableOptions}
        />
        <Dropdown
          onChange={(e) => {
            setAlgorithm(e.target.value);
            randomizeArray();
          }}
          disabled={disableOptions}
        />
        <Slider
          onChange={(e) => setAnimationSpeed(e.target.value)}
          disabled={disableOptions}
          speed={true}
        />
        <Slider
          onChange={(e) => {
            setArraySize(e.target.value);
          }}
          disabled={disableOptions}
          speed={false}
        />
        <Button
          onClick={handleSorting}
          type="SORT"
          name="Sort"
          disabled={disableOptions}
        />
      </div>
      <div className="sortingBars">
        {primaryArray &&
          primaryArray.map((val, key) => {
            return (
              <div
                className="bars"
                id={key}
                key={key}
                style={{ height: val }}
              ></div>
            );
          })}
      </div>
      {algorithm.name !== undefined && (
        <div className="timer">
          {disableOptions
            ? formatTime(startTime)
            : document.getElementsByClassName("timer")[0].innerHTML}
        </div>
      )}
      {algorithm.name !== undefined && (
        <div className="algoInfo">
          <div>Algorithm: {algorithm.name}</div>
          <div>Time Complexity: {algorithm.timeComplexity}</div>
        </div>
      )}
      {algorithm.name !== undefined && (
        <div className="algoInfoDetails">
          <div>{description[algorithm.name]}</div>
        </div>
      )}
      <div className="reg">22BCE5098</div>
      <div className="reg">VITC 2026</div>
    </div>
  );
};

export default Visualizer;
