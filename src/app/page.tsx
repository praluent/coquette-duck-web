import Image from "next/image";
import React from 'react';
import { S3Client, ListObjectsV2Command } from "@aws-sdk/client-s3";
import ClientHome from './clientSide'


export default function Home() {
  

  return (
    <main className="">
      <ClientHome />
    </main>
  );
}
