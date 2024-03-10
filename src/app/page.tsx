import Image from "next/image";
import React from 'react';
import { S3Client, ListObjectsV2Command } from "@aws-sdk/client-s3";
import ClientHome from './clientSide'


export default function Home() {
  

  return (
    <main className="dark:bg-info bg-primary dark:text-slate-400 text-slate-600 min-h-screen flex-col items-center justify-between">
      <ClientHome />
    </main>
  );
}
