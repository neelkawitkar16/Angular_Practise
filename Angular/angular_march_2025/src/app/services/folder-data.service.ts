import { Injectable } from '@angular/core';
import { FileItem } from '../models/file-item';

@Injectable({
  providedIn: 'root'
})
export class FolderDataService {
  getFolderData(): FileItem {
    return {
        "name": "project1",
        "isFolder": true,
        "items": [
          {
            "name": "node_modules",
            "isFolder": true,
            "items": [
              {
                "name": "bootstrap",
                "isFolder": true,
                "items": [{ "name": "bootstrap.min.css", "isFolder": false }]
              }
            ]
          },
          {
            "name": "public",
            "isFolder": true,
            "items": [
              { "name": "index.html", "isFolder": false },
              { "name": "manifest.json", "isFolder": false },
              { "name": "favicon.ico", "isFolder": false }
            ]
          },
          {
            "name": "src",
            "isFolder": true,
            "items": [
              {
                "name": "components",
                "isFolder": true,
                "items": [
                  {
                    "name": "header",
                    "isFolder": true,
                    "items": [
                      { "name": "header.css", "isFolder": false },
                      { "name": "header.js.css", "isFolder": false }
                    ]
                  },
                  {
                    "name": "footer",
                    "isFolder": true,
                    "items": [
                      { "name": "footer.css", "isFolder": false },
                      { "name": "footer.js.css", "isFolder": false }
                    ]
                  }
                ]
              },
              { "name": "App.js", "isFolder": false },
              { "name": "App.css", "isFolder": false },
              { "name": "index.js", "isFolder": false },
              { "name": "index.css", "isFolder": false }
            ]
          },
          {
            "name": "package.json",
            "isFolder": false
          },
          {
            "name": "package-lock.json",
            "isFolder": false
          }
        ]
    };
  }
}