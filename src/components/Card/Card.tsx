import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { MoreVertical } from "lucide-react";
import Image from "next/image";

export default function CardComponent() {
  return (
    <div
      className="flex justify-center items-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
      }}
    >
      <Card className="w-full max-w-[411px] overflow-hidden">
        <CardHeader className="p-0">
          <Image
            src="/images/DonutPink-min.png" // Le chemin relatif de l'image
            alt="Raycast Wallpaper"
            width={375} // Largeur de l'image
            height={263} // Hauteur de l'image
            className="w-full h-[263px] object-cover rounded-t-xl"
          />
        </CardHeader>
        <CardContent className="p-4">
          <div className="flex justify-between items-center mb-2">
            <h1 className="text-xl font-semibold">Raycast Wallpaper #1</h1>
            <Badge variant="secondary">premium</Badge>
          </div>
          <p className="text-sm text-muted-foreground">
            Recreate this wallpaper using AI.
          </p>
        </CardContent>
        <CardFooter className="flex justify-between items-center p-4">
          <Button>Start Challenge</Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <MoreVertical className="h-4 w-4" />
                <span className="sr-only">Open menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Share</DropdownMenuItem>
              <DropdownMenuItem>Report</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </CardFooter>
      </Card>
    </div>
  );
}
