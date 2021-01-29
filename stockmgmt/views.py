from django.shortcuts import render, redirect
from django.contrib import messages
from .models import *
from django.http import HttpResponse
import csv
from .forms import *
from django.contrib.auth.decorators import login_required
# Create your views here.

# def home(request):
# 	header = 'Welcome: This is the Home Page'
# 	title = 'Welcome: This is the Home Page'
# 	context = {
# 	"title": title,
# 	"header": header,
# 	}
# 	return render(request, "home.html",context)
def home(request):
	title = 'Welcome: This is the Home Page'
	form = 'Welcome: This is the Home Page'
	context = {
		"title": title,
		"test": form,
	}
	return redirect('/list_items')
@login_required
def list_items(request):
	header = 'List of list_items'
	form = StockSearchForm(request.POST or None)
	queryset = Stock.objects.all()
	context = {
		"header": header,
		"queryset": queryset,
		"form": form,
	}
	if request.method == 'POST':
		queryset = Stock.objects.filter(item_name__icontains=form['item_name'].value()
										)
		if form['export_to_CSV'].value() == True:
			response = HttpResponse(content_type='text/csv')
			response['Content-Disposition'] = 'attachment; filename="List of stock.csv"'
			writer = csv.writer(response)
			writer.writerow(['CATEGORY', 'ITEM NAME', 'QUANTITY'])
			instance = queryset
			for stock in instance:
			 writer.writerow([stock.category, stock.item_name, stock.quantity])
			return response
		context = {
		"form": form,
		"header": header,
		"queryset": queryset,
	}
	return render(request, "list_items.html",context)
@login_required
def add_items(request):
	form = StockCreateForm(request.POST or None)
	if form.is_valid():
		form.save()
		messages.success(request, 'Successfully Saved')
		return redirect('/list_items')
	context = {
		"form": form,
		"header": "Add Item",
	}
	return render(request, "add_items.html", context)


def update_items(request, pk):
	queryset = Stock.objects.get(id=pk)
	form = StockUpdateForm(instance=queryset)
	if request.method == 'POST':
		form = StockUpdateForm(request.POST, instance=queryset)
		if form.is_valid():
			form.save()
			messages.success(request, 'Successfully Updated')
			return redirect('/list_items')

	context = {
		'form':form
	}
	return render(request, 'add_items.html', context)

def delete_items(request, pk):
	queryset = Stock.objects.get(id=pk)
	if request.method == 'POST':
		queryset.delete()
		messages.success(request, 'Successfully Deleted!')
		return redirect('/list_items')
	return render(request, 'delete_items.html')

def stock_detail(request, pk):
	queryset = Stock.objects.get(id=pk)
	context = {
		"title": queryset.item_name,
		"queryset": queryset,
	}
	return render(request, "stock_detail.html", context)

def issue_items(request, pk):
	queryset = Stock.objects.get(id=pk)
	form = IssueForm(request.POST or None, instance=queryset)
	if form.is_valid():
		instance = form.save(commit=False)
		# instance.receive_quantity = 0
		instance.quantity -= instance.issue_quantity
		instance.issue_by = str(request.user)
		messages.success(request, "Issued SUCCESSFULLY. " + str(instance.quantity) + " " + str(instance.item_name) + "s now left in Store")
		instance.save()
		issue_history = StockHistory(
			id = instance.id, 
			last_updated = instance.last_updated,
			category_id = instance.category_id,
			item_name = instance.item_name, 
			quantity = instance.quantity, 
			issue_to = instance.issue_to, 
			issue_by = instance.issue_by, 
			issue_quantity = instance.issue_quantity, 
			)
		issue_history.save()

		return redirect('/stock_detail/'+str(instance.id))
		# return HttpResponseRedirect(instance.get_absolute_url())

	context = {
		"header": 'Issue ' + str(queryset.item_name),
		"queryset": queryset,
		"form": form,
		"username": 'Issue By: ' + str(request.user),
	}
	return render(request, "add_items.html", context)



def receive_items(request, pk):
	queryset = Stock.objects.get(id=pk)
	form = ReceiveForm(request.POST or None, instance=queryset)
	if form.is_valid():
		instance = form.save(commit=False)
		# instance.issue_quantity = 0
		instance.quantity += instance.receive_quantity
		instance.receive_by = str(request.user)
		instance.save()
		receive_history = StockHistory(
			id = instance.id, 
			last_updated = instance.last_updated,
			category_id = instance.category_id,
			item_name = instance.item_name, 
			quantity = instance.quantity, 
			receive_quantity = instance.receive_quantity, 
			receive_by = instance.receive_by
			)
		receive_history.save()
		messages.success(request, "Received SUCCESSFULLY. " + str(instance.quantity) + " " + str(instance.item_name)+"s now in Store")

		return redirect('/stock_detail/'+str(instance.id))
		# return HttpResponseRedirect(instance.get_absolute_url())
	context = {
			"header": 'Reaceive ' + str(queryset.item_name),
			"instance": queryset,
			"form": form,
			"username": 'Receive By: ' + str(request.user),
		}
	return render(request, "add_items.html", context)

def reorder_level(request, pk):
	queryset = Stock.objects.get(id=pk)
	form = ReorderLevelForm(request.POST or None, instance=queryset)
	if form.is_valid():
		instance = form.save(commit=False)
		instance.save()
		messages.success(request, "Reorder level for " + str(instance.item_name) + " is updated to " + str(instance.reorder_level))

		return redirect("/list_items")
	context = {
			"instance": queryset,
			"form": form,
		}
	return render(request, "add_items.html", context)

@login_required
def list_history(request):
	header = 'HISTORY OF ITEMS'
	queryset = StockHistory.objects.all()
	form = StockHistorySearchForm(request.POST or None)
	context = {
		"header": header,
		"queryset": queryset,
		"form": form,
	}
	if request.method == 'POST':
		category = form['category'].value()
		queryset = StockHistory.objects.filter(
								item_name__icontains=form['item_name'].value(),
								last_updated__range=[
														form['start_date'].value(),
														form['end_date'].value()
													]
								)


		if (category != ''):
			queryset = queryset.filter(category_id=category)
		if form['export_to_CSV'].value() == True:
			response = HttpResponse(content_type='text/csv')
			response['Content-Disposition'] = 'attachment; filename="Stock History.csv"'
			writer = csv.writer(response)
			writer.writerow(
				['CATEGORY', 
				'ITEM NAME',
				'QUANTITY', 
				'ISSUE QUANTITY', 
				'RECEIVE QUANTITY', 
				'RECEIVE BY', 
				'ISSUE BY', 
				'LAST UPDATED'])
			instance = queryset
			for stock in instance:
				writer.writerow(
				[stock.category, 
				stock.item_name, 
				stock.quantity, 
				stock.issue_quantity, 
				stock.receive_quantity, 
				stock.receive_by, 
				stock.issue_by, 
				stock.last_updated])
			return response
		context = {
		"form": form,
		"header": header,
		"queryset": queryset,
	}
	return render(request, "list_history.html",context)