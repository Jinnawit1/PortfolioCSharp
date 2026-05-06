# PortfolioCSharp

C# ASP.NET Core portfolio project for a Business System Developer.

## Concept

This portfolio focuses on real internal business systems:

- Approval Workflow System
- KPI Dashboard
- Document & File Control
- Excel / SQL / Email Automation
- ASP.NET Core, C#, SQL Server, JavaScript

## How to Run

1. Open `PortfolioCSharp.sln` in Visual Studio.
2. Restore NuGet packages if Visual Studio asks.
3. Press `F5` or click **Start Debugging**.
4. Open the browser URL shown by Visual Studio.

## Project Structure

```text
PortfolioCSharp/
├─ PortfolioCSharp.sln
├─ README.md
├─ .gitignore
└─ PortfolioCSharp
   ├─ Program.cs
   ├─ PortfolioCSharp.csproj
   ├─ Pages
   │  ├─ Index.cshtml
   │  ├─ Projects.cshtml
   │  ├─ About.cshtml
   │  └─ Contact.cshtml
   └─ wwwroot
      ├─ css/site.css
      └─ js/site.js
```

## Notes

The project targets `.NET 8.0`.
If Visual Studio 2026 has a newer .NET SDK installed, you can change the target framework in `PortfolioCSharp/PortfolioCSharp.csproj`.
