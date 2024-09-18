"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { ConnectButton } from "@/components/Wallet";
import { useReadContract, useWriteContract } from "wagmi";
import { deployedContract } from "@/constants/deployedContract";
import { useState } from "react";

export default function Home() {
  const [newGreeting, setNewGreeting] = useState("");
  const { data: greeting } = useReadContract({
    address: deployedContract.address as `0x${string}`,
    abi: deployedContract.abi,
    functionName: "greeting",
  });

  const { writeContractAsync } = useWriteContract();
  return (
    <div className={styles.page}>
      <ConnectButton />

      <>{greeting && <p>{greeting as string}</p>}</>
      <input
        type="text"
        value={newGreeting}
        onChange={(e) => setNewGreeting(e.target.value)}
      />
      <button
        onClick={async () => {
          writeContractAsync({
            address: deployedContract.address as `0x${string}`,
            abi: deployedContract.abi,
            functionName: "setGreeting",
            args: [newGreeting],
          });
        }}
      >
        Set Greeting
      </button>
    </div>
  );
}
