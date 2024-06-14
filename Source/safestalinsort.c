#include <stdio.h>
#include <time.h>
#include <stdlib.h>
#include <stdbool.h>

//Sends the "inmate" to the gulag array to be later integrated
int* send_to_gulag(int inmate, int* gulag, int* num_inmates) {
  //Handles case where the gulag hasnt been malloced yet
  if (gulag == NULL) {
    gulag = malloc(sizeof(int));
    if (gulag==NULL) {
      printf("Malloc Failed Bruh\n");
      exit(1);
    }
    (*num_inmates)++;
    gulag[0] = inmate;
    return gulag;
  } else {
    gulag = realloc(gulag, (*num_inmates + 1) * sizeof(int));
    if (gulag==NULL) {
      printf("Malloc Failed Bruh\n");
      exit(1);
    }
    (*num_inmates)++;
    gulag[*num_inmates - 1] = inmate;
    return gulag;
  }
}

//Merges the two lists and reallocs the memory for numbers. length is the length of the numbers array, numinmates is the length of the gulag array
int* reintegrate(int* gulag, int* numbers, int* length, int* num_inmates) {
  int gulag_index = 0;
  numbers = realloc(numbers, (*length + *num_inmates) * sizeof(int));
  if (numbers==NULL) {
    printf("Malloc Failed Bruh\n");
    exit(1);
  }
  for (int i = 0; i < *num_inmates;i++) {
    numbers[*length + i] = gulag[gulag_index];
    gulag_index++;
  }
  *length += *num_inmates;
  *num_inmates = 0;
  return numbers;
}

//Literally just shifts everything right of the number one place to the left, removing the original value stored there. Very inefficient and messy i think.
void reorganise_proleteriat(int* numbers, int position, int* length)
{
  for(int i = position; i < *length - 1; i++) {
    numbers[i] = numbers[i + 1];
  }
  //Prevents duplicated values by decrementing the value of length
  (*length)--;
}

bool is_sorted(int* numbers, int length) {
  //Must be length - 1 to avoid segfault
  for (int i = 0;i < length - 1;i++) {
    if (numbers[i] > numbers[i+1]) {
      return false;
    }
  }
  return true;
}

int main(int argc, char *argv[])
{
  if (argc < 2) {
    printf("Incorrect Usage. Correct Usage ./safestalinsort $NUM\n");
    return 1;
  }

  //Get the number of random numbers to be generated
  int* gulag = NULL; 
  int iterations;
  int num_inmates;
  int length = atoi(argv[1]);

  //Dynamically allocate memory
  int* numbers = malloc(length * sizeof(int));
  if (numbers==NULL) {
    printf("Malloc Failed Bruh\n");
    exit(1);
  }

  srand(time(NULL));
  for (int i = 0; i < length;i++) {
    numbers[i] = rand() % 1000;
  }

  //Print the initial array
  printf("Comrade, our nations people are in disorder:\n");
  for (int i=0;i < length;i++) {
    printf("%d ", numbers[i]);
  }

  //Stalin Sort Begins
  if (is_sorted(numbers, length)) {
    printf("\nCyka, you are lucky comrade, list is sorted\n");
    return 0;
  } 
  
  while (true) {
    bool sorted = true;
    //Iterate through the list, comparing every item
    for (int i = 0; i < length - 1;) {
      //I predict theres gonna be some issues with this, remember to solve the duplication problem somewhere
      if (numbers[i] > numbers[i+1]) {
        sorted = false;
        gulag = send_to_gulag(numbers[i], gulag, &num_inmates);
        reorganise_proleteriat(numbers, i, &length);
      } else {
        //Increment index if it doesnt have any issues
        i++;
      }
    }
    iterations++;
    if (sorted) {
      break;
    }
    printf("\nThe filthy capitalist pigs have been removed from glorious Russian society.\nGulag currently contains: \n");
    printf("Num Inmates in Gulag: %d\n", num_inmates);
    for (int i = 0; i < num_inmates;i++) {
      printf("%d ", gulag[i]);
    }
    numbers = reintegrate(gulag, numbers, &length, &num_inmates);
    //For whatever reason i have to free this memory in the main function...no clue why
    free(gulag);
    gulag = NULL;
    printf("\nGulag prisoners reintegrated. Mother Russia now contains:\n");
    for (int i = 0; i < length;i++) {
      printf("%d ", numbers[i]);
    }
  }

  printf("\nList is now sorted comrade\n");
  for (int i=0;i < length;i++) {
    printf("%d ", numbers[i]);
  }

  printf("\nTook %d Iterations.\n", iterations);

  //BE FREE MY CHILDREN
  if (numbers!=NULL) {
    free(numbers);
  }
  return 0;
}
