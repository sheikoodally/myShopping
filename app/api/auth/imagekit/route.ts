import { NextResponse } from "next/server";
import config from "@/lib/config";
import ImageKit from "imagekit";

const {env: { imagekit: { publicKey, privateKey, urlEndpoint}}} = config;

const imagekit = new ImageKit({
  publicKey: publicKey,
  privateKey: privateKey,
  urlEndpoint: urlEndpoint,
});

export async function GET() {
  console.log(publicKey)
  return NextResponse.json(imagekit.getAuthenticationParameters());
}