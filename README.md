# Covid-csv

## Funcionamento

- Através de uma rotina CRON, uma vez ao dia são buscados os dados diários da COVID-19 do Brasil, EUA, Russia e China no https://disease.sh/, e partir desses dados são gerados dois relátorios no formato de csv, um do Brasil e EUA e outro da Russia e China. Uma vez gerados esses relátorios, por fim, eles são enviados ao GoFile (https://gofile.io/)
