<template>
  <main>
    <div class="flex flex-col">
      <SearchBar class="px-8 pt-8" @search-emails="searchEmails"/>
      <!-- first way -->
      <div class="pt-8 px-8 flex flex-col ">
        <EmailTable :headers="headers" :emailsInformation="emailsInformation"/>
        <PaginationTable/>
      </div>
      <!-- second way --> 
      <!-- <div class="flex flex-col md:flex-row justify-center items-stretch px-8 pt-8 gap-5">
        <div class="w-full md:w-8/12">
            <EmailTable :headers="headers" :emailsInformation="emailsInformation"/>
            <PaginationTable/>
        </div>
        <EmailView class="w-full md:w-4/12" :emailsInformation="emailsInformation"/> 
      </div>-->
    </div>
  </main>
</template>

<script setup lang="ts">
import EmailTable from "@/components/EmailTable.vue";
import EmailView from "@/components/EmailView.vue";
import SearchBar from "@/components/SearchBar.vue"
import PaginationTable from "@/components/table_email_components/PaginationTable.vue";

const headers = ["Date", "Subject", "From", "To"]

// let emailsInformation = []

let emailsInformation = [
    {
        "score": 7.885112712987111,
        "email": {
            "bcc": "",
            "cc": "",
            "date": "2001-05-18T00:45:00-07:00",
            "from": "cathy.phillips@enron.com",
            "message": "Hi Mike -  Below is the login information for the PEP system.  I will also include a  copy of your PEP e-mail message with your other materials I am sending to  your home today.  Hope you have a safe trip back and a good trip to Mexico.  CP   PEP INFO  User ID:  90009324  Password:  X84NTE5W      Mike McConnell 05/17/2001 08:45 PM    To: Cathy Phillips/HOU/ECT@ECT  cc:   Subject: PEP  CP,  Please send me my password and login info via email on friday.  I need to  approve somethings this weekend. thanks, m",
            "subject": "Re: PEP",
            "to": "mike.mcconnell@enron.com"
        }
    },
    {
        "score": 7.515288444140278,
        "email": {
            "bcc": "",
            "cc": "",
            "date": "2001-02-09T00:38:00-08:00",
            "from": "cathy.phillips@enron.com",
            "message": "Mike McConnell asked me to send you a message saying that the sidebar looks  fine.  Please let me know if you have any questions.  Thanks.  Cathy Phillips X-36898      Jeannie Mandelker 02/08/2001 07:05 PM To: Eric Gonzales/LON/ECT@ECT, Jeffrey A Shankman/HOU/ECT@ECT, Mike  McConnell/HOU/ECT@ECT cc: John Ambler/ENRON_DEVELOPMENT@ENRON_DEVELOPMENT, Habiba  Bayi/ENRON_DEVELOPMENT@ENRON_DEVELOPMENt  Subject: Approval of special LNG sidebar for 2000 Annual Report  Hi -- I'm the writer in Corporate Public Relations who writes the annual  report.  I've written a short sidebar on Enron Global LNG. It's intended to give a  bullet-point overview.  Please read it and forward any comments to me. I can be reached at ext.  3-6305. If you prefer, you can fax changes to me at 914-736-5987.  I've sent it to Rick and Wayne, whom I interviewed about it.  Thanks, Jeannie",
            "subject": "Re: Approval of special LNG sidebar for 2000 Annual Report",
            "to": "jeannie.mandelker@enron.com"
        }
    },
    {
        "score": 7.515288444140278,
        "email": {
            "bcc": "",
            "cc": "",
            "date": "2001-02-09T00:38:00-08:00",
            "from": "cathy.phillips@enron.com",
            "message": "Mike McConnell asked me to send you a message saying that the sidebar looks  fine.  Please let me know if you have any questions.  Thanks.  Cathy Phillips X-36898      Jeannie Mandelker 02/08/2001 07:05 PM To: Eric Gonzales/LON/ECT@ECT, Jeffrey A Shankman/HOU/ECT@ECT, Mike  McConnell/HOU/ECT@ECT cc: John Ambler/ENRON_DEVELOPMENT@ENRON_DEVELOPMENT, Habiba  Bayi/ENRON_DEVELOPMENT@ENRON_DEVELOPMENt  Subject: Approval of special LNG sidebar for 2000 Annual Report  Hi -- I'm the writer in Corporate Public Relations who writes the annual  report.  I've written a short sidebar on Enron Global LNG. It's intended to give a  bullet-point overview.  Please read it and forward any comments to me. I can be reached at ext.  3-6305. If you prefer, you can fax changes to me at 914-736-5987.  I've sent it to Rick and Wayne, whom I interviewed about it.  Thanks, Jeannie",
            "subject": "Re: Approval of special LNG sidebar for 2000 Annual Report",
            "to": "jeannie.mandelker@enron.com"
        }
    },
    {
        "score": 7.515288444140278,
        "email": {
            "bcc": "",
            "cc": "",
            "date": "2001-02-09T00:38:00-08:00",
            "from": "cathy.phillips@enron.com",
            "message": "Mike McConnell asked me to send you a message saying that the sidebar looks  fine.  Please let me know if you have any questions.  Thanks.  Cathy Phillips X-36898      Jeannie Mandelker 02/08/2001 07:05 PM To: Eric Gonzales/LON/ECT@ECT, Jeffrey A Shankman/HOU/ECT@ECT, Mike  McConnell/HOU/ECT@ECT cc: John Ambler/ENRON_DEVELOPMENT@ENRON_DEVELOPMENT, Habiba  Bayi/ENRON_DEVELOPMENT@ENRON_DEVELOPMENt  Subject: Approval of special LNG sidebar for 2000 Annual Report  Hi -- I'm the writer in Corporate Public Relations who writes the annual  report.  I've written a short sidebar on Enron Global LNG. It's intended to give a  bullet-point overview.  Please read it and forward any comments to me. I can be reached at ext.  3-6305. If you prefer, you can fax changes to me at 914-736-5987.  I've sent it to Rick and Wayne, whom I interviewed about it.  Thanks, Jeannie",
            "subject": "Re: Approval of special LNG sidebar for 2000 Annual Report",
            "to": "jeannie.mandelker@enron.com"
        }
    }
]

// functions
function searchEmails(searchString: string){
  if (searchString != "") {
    console.log(searchString )
  }
} 
</script>