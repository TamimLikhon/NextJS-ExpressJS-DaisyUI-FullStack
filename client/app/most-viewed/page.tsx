'use client';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Eye } from "lucide-react";

const mostViewedData = [
  { id: 1, rank: 1, title: "The Rise of Agentic AI", views: "2.4M", author: "Tech Insider", category: "Technology" },
  { id: 2, rank: 2, title: "Global Markets Rally", views: "1.8M", author: "Finance Daily", category: "Business" },
  { id: 3, rank: 3, title: "The Next Big Thing in Sports", views: "1.5M", author: "Sports Weekly", category: "Sports" },
  { id: 4, rank: 4, title: "Healthy Habits for 2026", views: "1.1M", author: "Health & Wellness", category: "Health" },
  { id: 5, rank: 5, title: "Movie Awards Surprises", views: "900K", author: "Entertainment Now", category: "Entertainment" },
];

export default function MostViewedNews() {
  return (
    <div className="container mx-auto p-6 max-w-5xl min-h-screen">
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Most Viewed</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <h1 className="text-3xl font-bold mb-8 text-foreground flex items-center gap-3">
        <Eye className="h-8 w-8 text-primary" />
        All-Time Most Viewed
      </h1>

      <div className="border border-border rounded-md bg-card">
        <Table>
          <TableCaption className="mb-4">Top 5 most viewed articles of all time.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Rank</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Author</TableHead>
              <TableHead className="text-right">Total Views</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mostViewedData.map((article) => (
              <TableRow key={article.id}>
                <TableCell className="font-bold text-lg text-primary">#{article.rank}</TableCell>
                <TableCell className="font-semibold cursor-pointer hover:underline">{article.title}</TableCell>
                <TableCell>
                  <span className="bg-secondary text-secondary-foreground px-2 py-1 rounded-full text-xs">
                    {article.category}
                  </span>
                </TableCell>
                <TableCell className="text-muted-foreground">{article.author}</TableCell>
                <TableCell className="text-right font-medium">{article.views}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
