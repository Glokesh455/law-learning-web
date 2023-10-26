import { Component } from '@angular/core';
import { PdfService } from 'src/app/pdf.service';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export class DocumentsComponent {

  pdfNames: string[] = ['pdf1.pdf', 'pdf2', 'pdf3']; // Replace with your actual PDF file names
  selectedPdf: string | null = null;
  pdfUrl: string | null = null;

  constructor(private pdfService: PdfService) { }

  loadPdf(pdfName: string): void {
    this.selectedPdf = pdfName;
    this.pdfService.getPdfUrl(pdfName).subscribe(data => {
      const blob = new Blob([data], { type: 'application/pdf' });
      this.pdfUrl = URL.createObjectURL(blob);
    });
  }

}
