import { QRCode } from "react-qr-code";
import { Card, CardContent } from "@/components/ui/card";

export default function QRCard() {
  return (
    <main className="min-h-screen flex w-full items-center justify-center bg-slate-300">
      <Card className="w-full max-w-72 p-2 ring-0 rounded-xl bg-white text-center">
        <CardContent className="p-1">
          <div className="bg-blue-500 rounded-xl flex items-center justify-center">
            <QRCode
              value="https://www.frontendmentor.io"
              size={160}
              fgColor="#FFFFFF"
              bgColor="#00000000"
              className="m-12 p-2"
            />
          </div>
          <div className="mt-5 mb-4 px-2">
            <p className="font-bold  text-xl mb-4">
              Improve your front-end skills by building projects
            </p>
            <p className="text-gray-500  text-sm">
              Scan the QR code to visit Frontend Mentor and take your coding
              skills to the next level
            </p>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
