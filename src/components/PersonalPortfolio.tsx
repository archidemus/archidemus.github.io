import me from "@/assets/me.jpg";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Github, Instagram, Youtube } from "lucide-react";
import Content from "./Content";

export default function Component() {
  return (
    <Content>
      <CardHeader className="text-center">
        <Avatar className="w-32 h-32 mx-auto mb-4">
          <AvatarImage src={me.src} alt="Foto de perfil" />
          <AvatarFallback>
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
          </AvatarFallback>
        </Avatar>
        <CardTitle className="text-2xl font-bold">Me llamo Ignacio</CardTitle>
        <CardDescription className="text-lg">
          pero me dicen nano
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-center">Ingeniería de software - UI/UX 👨‍💻</p>
        <p className="text-center">Viajar lento 🏍️🚍</p>
        <p className="text-center">Deportes en general 🎿🏋️🏄</p>
        <div className="flex justify-center space-x-4 mt-8">
          <a
            href="https://www.youtube.com/@don_archidemus"
            className="text-red-600 hover:text-red-800 transition-colors"
          >
            <Youtube className="w-6 h-6" />
            <span className="sr-only">YouTube</span>
          </a>
          <a
            href="https://www.instagram.com/archidemus_/"
            className="text-pink-600 hover:text-pink-800 transition-colors"
          >
            <Instagram className="w-6 h-6" />
            <span className="sr-only">Instagram</span>
          </a>
          <a
            href="https://www.github.com/archidemus"
            className="text-blue-700 hover:text-blue-900 transition-colors"
          >
            <Github className="w-6 h-6" />
            <span className="sr-only">GitHub</span>
          </a>
        </div>
      </CardContent>
    </Content>
  );
}
