import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vacances',
  templateUrl: './vacances.component.html',
  styleUrls: ['./vacances.component.css']
})
export class VacancesComponent implements OnInit {
  dateRange: string = '';
  days: string[] = [];

  ngOnInit() {
    this.loadAgenda();
  }

  generateAgenda() {
    this.days = [];  // Réinitialiser les jours
    const [start, end] = this.dateRange.split('-').map(date => this.parseDate(date.trim()));

    if (start && end && start <= end) {
      let currentDate = new Date(start);
      while (currentDate <= end) {
        this.days.push(currentDate.getDate() + '/' + (currentDate.getMonth() + 1));
        currentDate.setDate(currentDate.getDate() + 1);
      }
      this.saveAgenda();
    }
  }

  parseDate(dateStr: string): Date | null {
    const [day, month] = dateStr.split('/').map(Number);
    if (!isNaN(day) && !isNaN(month)) {
      const date = new Date(new Date().getFullYear(), month - 1, day);
      return date;
    }
    return null;
  }

  saveAgenda() {
    localStorage.setItem('vacationDateRange', this.dateRange);
    localStorage.setItem('vacationDays', JSON.stringify(this.days));
  }

  loadAgenda() {
    const savedDateRange = localStorage.getItem('vacationDateRange');
    const savedDays = localStorage.getItem('vacationDays');
    if (savedDateRange && savedDays) {
      this.dateRange = savedDateRange;
      this.days = JSON.parse(savedDays);
    }
  }

  clearAgenda() {
    this.dateRange = '';
    this.days = [];
    localStorage.removeItem('vacationDateRange');
    localStorage.removeItem('vacationDays');
  }
}
