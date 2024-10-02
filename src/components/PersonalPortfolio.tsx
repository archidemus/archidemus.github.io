import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Facebook, Github, Instagram, Linkedin, Youtube } from "lucide-react";
import me from "@/assets/me.jpg";

export default function Component() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <Avatar className="w-32 h-32 mx-auto mb-4">
            <AvatarImage src={me.src} alt="Foto de perfil" />
            <AvatarFallback>JP</AvatarFallback>
          </Avatar>
          <CardTitle className="text-2xl font-bold">Archidemus</CardTitle>
          <CardDescription className="text-lg">
            Ignacio Norambuena
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-center mb-6">
            Disfruto de paseos largos, deportes diversos y de comer rico con
            amigos. Me gusta la historia, la economía y la política. Ingeniero
            Civil Informático con foco en UI/UX.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#"
              className="text-red-600 hover:text-red-800 transition-colors"
            >
              <Youtube className="w-6 h-6" />
              <span className="sr-only">YouTube</span>
            </a>
            <a
              href="#"
              className="text-pink-600 hover:text-pink-800 transition-colors"
            >
              <Instagram className="w-6 h-6" />
              <span className="sr-only">Instagram</span>
            </a>
            <a
              href="#"
              className="text-blue-600 hover:text-blue-800 transition-colors"
            >
              <Facebook className="w-6 h-6" />
              <span className="sr-only">Facebook</span>
            </a>
            <a
              href="#"
              className="text-blue-700 hover:text-blue-900 transition-colors"
            >
              <Github className="w-6 h-6" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="#"
              className="text-blue-700 hover:text-blue-900 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
