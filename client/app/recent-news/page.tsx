'use client';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Info } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export default function RecentNews() {
  const articles = [
    {
      id: 1,
      title: "The Future of Web Development in 2025",
      author: "Jane Doe",
      avatar: "https://i.pravatar.cc/150?img=1",
      summary: "Explore the emerging trends in web development, from new AI-powered tools to advanced framework capabilities.",
      fullText: "Web development is evolving rapidly. In this article, we delve deep into how AI is reshaping the way developers write code, the rise of edge computing, and what it means for front-end frameworks like Next.js and React. By understanding these shifts, developers can stay ahead of the curve."
    },
    {
      id: 2,
      title: "Understanding Server Actions in Next.js",
      author: "John Smith",
      avatar: "https://i.pravatar.cc/150?img=2",
      summary: "A comprehensive guide to using Server Actions to simplify data mutations.",
      fullText: "Server Actions provide a seamless way to handle form submissions and data mutations without writing boilerplate API routes. We explore how to set them up, handle loading states, and ensure robust error handling."
    },
    {
      id: 3,
      title: "Mastering Tailwind CSS v4",
      author: "Alice Johnson",
      avatar: "https://i.pravatar.cc/150?img=3",
      summary: "Everything you need to know about the latest Tailwind CSS release.",
      fullText: "Tailwind CSS v4 brings a host of new features including CSS-only configuration, improved performance, and first-class support for modern CSS features. Learn how to migrate your existing projects and leverage the new capabilities."
    }
  ];

  return (
    <div className="container mx-auto p-6 max-w-4xl min-h-screen">
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Recent News</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Alert className="mb-8 border-primary/50 bg-primary/5">
        <Info className="h-4 w-4 text-primary" />
        <AlertTitle className="text-primary font-bold">New Articles Published!</AlertTitle>
        <AlertDescription>
          Check out our latest news and updates below. We publish new content every day.
        </AlertDescription>
      </Alert>

      <h1 className="text-3xl font-bold mb-6 text-foreground">Recent News</h1>

      <div className="space-y-6">
        {articles.map((article) => (
          <div key={article.id} className="border border-border rounded-lg p-5 shadow-sm bg-card text-card-foreground">
            <div className="flex items-center gap-4 mb-4">
              <Avatar>
                <AvatarImage src={article.avatar} alt={article.author} />
                <AvatarFallback>{article.author.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <h2 className="text-xl font-semibold">{article.title}</h2>
                <p className="text-sm text-muted-foreground">By {article.author}</p>
              </div>
            </div>
            
            <p className="mb-4 text-foreground/80">{article.summary}</p>
            
            <Collapsible>
              <CollapsibleTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2">
                  Read More
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent className="mt-4 text-foreground/90 bg-muted p-4 rounded-md border border-border">
                {article.fullText}
              </CollapsibleContent>
            </Collapsible>
          </div>
        ))}
      </div>
    </div>
  );
}
