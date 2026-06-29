'use client';
import { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";

const trendingData = [
  { id: 1, rank: 1, title: "Next.js 16 Released", views: "1.2M", author: "Vercel Team", trend: "up" },
  { id: 2, rank: 2, title: "React 19 Hooks Explained", views: "980K", author: "Dan Abramov", trend: "up" },
  { id: 3, rank: 3, title: "Tailwind CSS v4 is Here", views: "850K", author: "Adam Wathan", trend: "same" },
  { id: 4, rank: 4, title: "Why AI will not replace you", views: "720K", author: "Jane Doe", trend: "down" },
  { id: 5, rank: 5, title: "Shadcn UI best practices", views: "540K", author: "John Smith", trend: "up" },
];

export default function TrendingNews() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data fetching
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container mx-auto p-6 max-w-5xl min-h-screen">
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Trending News</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <h1 className="text-3xl font-bold mb-8 text-foreground">Trending Now</h1>

      <div className="border border-border rounded-md bg-card">
        <Table>
          <TableCaption className="mb-4">Top 5 most read articles today.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Rank</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Author</TableHead>
              <TableHead className="text-right">Views</TableHead>
              <TableHead className="text-center">Trend</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {loading ? (
              // Loading State Skeletons
              Array.from({ length: 5 }).map((_, i) => (
                <TableRow key={i}>
                  <TableCell><Skeleton className="h-4 w-8 bg-muted" /></TableCell>
                  <TableCell><Skeleton className="h-4 w-[250px] bg-muted" /></TableCell>
                  <TableCell><Skeleton className="h-4 w-[100px] bg-muted" /></TableCell>
                  <TableCell className="text-right"><Skeleton className="h-4 w-12 ml-auto bg-muted" /></TableCell>
                  <TableCell className="flex justify-center"><Skeleton className="h-6 w-6 rounded-full bg-muted" /></TableCell>
                </TableRow>
              ))
            ) : (
              // Actual Data
              trendingData.map((article) => (
                <TableRow key={article.id}>
                  <TableCell className="font-medium">#{article.rank}</TableCell>
                  <TableCell className="font-semibold text-primary cursor-pointer hover:underline">{article.title}</TableCell>
                  <TableCell className="text-muted-foreground">{article.author}</TableCell>
                  <TableCell className="text-right text-muted-foreground">{article.views}</TableCell>
                  <TableCell className="flex justify-center">
                    {article.trend === 'up' && <TrendingUp className="text-green-500 h-5 w-5" />}
                    {article.trend === 'down' && <TrendingDown className="text-red-500 h-5 w-5" />}
                    {article.trend === 'same' && <Minus className="text-gray-400 h-5 w-5" />}
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
